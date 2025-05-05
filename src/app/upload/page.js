"use client";

import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Paper, Grid, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import PreviewCode from "@/components/PreviewCode";
import { IoAdd } from "react-icons/io5";

// สไตล์สำหรับกล่องอัปโหลด
const UploadBox = styled(Paper)(({ theme }) => ({
  width: 180,
  height: 180,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: 16,
  backgroundColor: "#F1F2F6",
  "&:hover": {
    backgroundColor: "#E5E6EC",
  },
  margin: "0 auto",
  boxShadow: "none",
}));

// สไตล์สำหรับกล่องรูปภาพ
const ImageBox = styled(Paper)(({ theme }) => ({
  width: 180,
  height: 180,
  position: "relative",
  borderRadius: 16,
  overflow: "visible", // เปลี่ยนจาก hidden เป็น visible
  margin: "0 auto",
  boxShadow: "none",
}));

// สไตล์สำหรับ wrapper ของรูปภาพ (เพื่อจัดการ overflow)
const ImageWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: 16,
  position: "relative",
});

// คอมโพเนนต์สำหรับแต่ละรูปภาพที่สามารถลากได้
function SortableImageItem({ id, src, onRemove, onUpload, index }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
  };

  return (
    <Grid item xs={12} sm={6} md={4} ref={setNodeRef} style={style}>
      {src ? (
        <ImageBox>
          <ImageWrapper>
            <img src={src} alt={`Profile ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <Box
              {...attributes}
              {...listeners}
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                backgroundColor: "rgba(255,255,255,0.7)",
                borderRadius: "50%",
                cursor: "grab",
              }}
            >
              <IconButton size="small">
                <DragIndicatorIcon />
              </IconButton>
            </Box>
            {index === 0 && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "white",
                  padding: 0.5,
                  textAlign: "center",
                }}
              >
                <Typography variant="caption">Avata Image</Typography>
              </Box>
            )}
          </ImageWrapper>

          {/* ปุ่ม Close แยกออกมาจาก ImageWrapper เพื่อให้มันอยู่นอกขอบได้ */}
          <IconButton
            size="small"
            onClick={() => onRemove(id)}
            sx={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 24,
              height: 24,
              backgroundColor: "#AF2758",
              color: "white",
              zIndex: 88,
              "&:hover": { backgroundColor: "#951F49" },
            }}
          >
            <CloseIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </ImageBox>
      ) : (
        <UploadBox onClick={() => onUpload(id)}>
          <IoAdd size={24} color="#7D2262" />
          <p className=" text-[#7D2262] text-sm pt-2.5">Upload Photo</p>
        </UploadBox>
      )}
    </Grid>
  );
}

export default function UploadPage() {
  // สร้าง state เก็บข้อมูลรูปภาพแบบง่าย
  const [items, setItems] = useState([
    { id: "img1", src: "" },
    { id: "img2", src: "" },
    { id: "img3", src: "" },
    { id: "img4", src: "" },
    { id: "img5", src: "" },
  ]);

  // เซ็นเซอร์สำหรับการลาก
  const sensors = useSensors(useSensor(PointerSensor));

  // เคลียร์ค่าทั้งหมดเมื่อมีการ refresh
  useEffect(() => {
    // เคลียร์ค่าเมื่อโหลดหน้าเว็บ
    setItems([
      { id: "img1", src: "" },
      { id: "img2", src: "" },
      { id: "img3", src: "" },
      { id: "img4", src: "" },
      { id: "img5", src: "" },
    ]);
  }, []);

  // ฟังก์ชันอัปโหลดรูปภาพ (จำลอง)
  const handleUpload = (id) => {
    // สร้าง input element สำหรับเลือกไฟล์
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setItems((prev) => prev.map((item) => (item.id === id ? { ...item, src: event.target.result } : item)));
        };
        reader.readAsDataURL(file);
      }
    };

    fileInput.click();
  };

  // ฟังก์ชันลบรูปภาพ
  const handleRemove = (id) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, src: "" } : item)));
  };

  // ฟังก์ชันจัดการลาก-วาง
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.findIndex((item) => item.id === active.id);
        const newIndex = prev.findIndex((item) => item.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="container">
          <Box sx={{ width: "100%", margin: "0 auto" }}>
            <h1 className="text-3xl font-bold mb-8">Upload</h1>
            <p className="text mb-7">ต้องติดตั้ง Lib @dnd-kit ที่เป็นชุดไลบรารีสำหรับการสร้างฟีเจอร์ลากและวาง (drag and drop) ใน React</p>

            <PreviewCode language="command line">{`npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities`}</PreviewCode>

            <h2 className="text-2xl font-bold py-8">Example</h2>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={items.map((item) => item.id)} strategy={horizontalListSortingStrategy}>
                <Grid container spacing={2}>
                  {items.map((item, index) => (
                    <SortableImageItem
                      key={item.id}
                      id={item.id}
                      src={item.src}
                      index={index}
                      onRemove={handleRemove}
                      onUpload={handleUpload}
                    />
                  ))}
                </Grid>
              </SortableContext>
            </DndContext>
          </Box>
        </div>
      </div>
    </>
  );
}
