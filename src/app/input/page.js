"use client";

import {
  Box,
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Button,
  Select,
  MenuItem,
  Chip,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Paper,
  Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useRef, forwardRef } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { IoCalendarOutline, IoCheckmarkSharp } from "react-icons/io5";

const CalendarIcon = forwardRef((props, ref) => {
  const { ownerState, ...rest } = props;
  return <IoCalendarOutline ref={ref} {...rest} />;
});
CalendarIcon.displayName = "CalendarIcon";

// สร้างคอมโพเนนต์ CheckIcon เอง
const CheckIcon = forwardRef((props, ref) => {
  return (
    <IoCheckmarkSharp
      ref={ref}
      {...props}
      style={{
        fontSize: "16px",
        color: "#FFFFFF",
      }}
    />
  );
});
CheckIcon.displayName = "CheckIcon";

// Custom styled Checkbox
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  padding: 0,
  borderRadius: "8px",
  width: "24px",
  height: "24px",
  "&.MuiCheckbox-root": {
    color: "transparent",
    backgroundColor: "#FFFFFF",
    border: "1.5px solid #D6D9E4",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      border: "1.5px solid #A62D82",
      borderRadius: "8px",
    },
  },
  "&.Mui-checked": {
    color: "#FFFFFF",
    backgroundColor: "#A62D82",
    border: "1.5px solid #A62D82",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#A62D82",
      border: "1.5px solid #A62D82",
    },
  },
  "&.Mui-disabled": {
    color: "transparent",
    backgroundColor: "#F2F2F7",
    border: "1.5px solid #D6D9E4",
    borderRadius: "8px",
    opacity: 0.5,
  },
  "&.Mui-disabled.Mui-checked": {
    color: "#FFFFFF",
    backgroundColor: "#A62D82",
    opacity: 0.5,
  },
}));

// Custom styled Radio
const CustomRadio = styled(Radio)(({ theme }) => ({
  padding: 0,
  width: "24px",
  height: "24px",
  "&.MuiRadio-root": {
    color: "transparent",
    backgroundColor: "#FFFFFF",
    border: "1.5px solid #D6D9E4",
    borderRadius: "12px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      border: "1.5px solid #A62D82",
    },
  },
  "&.Mui-checked": {
    color: "#FFFFFF",
    backgroundColor: "#A62D82",
    border: "1.5px solid #A62D82",
    "&:hover": {
      backgroundColor: "#A62D82",
      border: "1.5px solid #A62D82",
    },
  },
  "&.Mui-disabled": {
    color: "transparent",
    backgroundColor: "#F2F2F7",
    border: "1.5px solid #D6D9E4",
    opacity: 0.5,
  },
  "&.Mui-disabled.Mui-checked": {
    color: "#FFFFFF",
    backgroundColor: "#A62D82",
    opacity: 0.5,
  },
}));

// Custom styled FormGroup with gap
const StyledFormGroup = styled(FormGroup)({
  display: "flex",
  flexDirection: "column",
  gap: "16px", // กำหนดระยะห่างระหว่าง checkbox 16px
});

// Custom styled RadioGroup with gap
const StyledRadioGroup = styled(RadioGroup)({
  display: "flex",
  flexDirection: "column",
  gap: "16px", // กำหนดระยะห่างระหว่าง radio 16px
});

const datePickerStyles = `
  .MuiPickersInputBase-root {
    height: 48px !important;
    border-radius: 8px !important;
  }

  .MuiPickersOutlinedInput-notchedOutline {
    border-color: #D6D9E4 !important;
  }
  
  .Mui-focused .MuiPickersOutlinedInput-notchedOutline {
    border-color: #A62D82 !important;
    border-width: 1px !important;
  }
  
  .MuiPickersDay-root.Mui-selected {
    background-color: #A62D82 !important;
    color: #FFFFFF !important;
  }
  
  .MuiPickersDay-root.Mui-selected:hover {
    background-color: #8e2771 !important;
  }
  
  .MuiDateCalendar-root .MuiPickersDay-root.Mui-selected,
  .MuiDateCalendar-root .MuiPickersDay-root.Mui-selected:focus {
    background-color: #A62D82 !important;
    color: #FFFFFF !important;
  }
  
  .MuiPickersDay-today {
    border-color: #A62D82 !important;
  }
  
  .MuiPickersCalendarHeader-switchViewButton,
  .MuiPickersCalendarHeader-label,
  .MuiPickersArrowSwitcher-button {
    color: #A62D82 !important;
  }
  
  .MuiButtonBase-root.MuiPickersDay-root.MuiPickersDay-today:not(.Mui-selected) {
    border-color: #A62D82 !important;
  }
  
  .MuiButtonBase-root.MuiPickersDay-root:not(.Mui-selected):hover,
  .MuiButtonBase-root.MuiPickersDay-root:not(.Mui-selected):focus {
    background-color: rgba(166, 45, 130, 0.1) !important;
  }
  
  .MuiClock-pin,
  .MuiClockPointer-root,
  .MuiClockPointer-thumb {
    background-color: #A62D82 !important;
  }
  
  .MuiClockNumber-root.Mui-selected {
    background-color: #A62D82 !important;
    color: #FFFFFF !important;
  }
`;

// Custom theme สำหรับ MUI components
const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "48px",
          borderRadius: "8px",
          fontSize: "16px",
          "& fieldset": {
            borderColor: "#D6D9E4",
            borderRadius: "8px",
          },
          "&:hover fieldset": {
            borderColor: "#D6D9E4",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#A62D82",
            borderWidth: "1px",
          },
          "& .MuiInputBase-input": {
            padding: "12px 14px 16px 14px",
            "&::placeholder": {
              color: "#A0A3BD",
              opacity: 1,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D6D9E4",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D6D9E4",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#A62D82",
            borderWidth: "1px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: "48px",
          "& .MuiSelect-select": {
            paddingTop: "12px",
            paddingBottom: "12px",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#F6EBFA",
          color: "#A62D82",
          margin: "2px",
          "& .MuiChip-deleteIcon": {
            color: "#A62D82",
          },
        },
      },
    },
    // เพิ่ม custom style สำหรับ DatePicker
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          borderRadius: "8px",
        },
      },
    },
    // เพิ่ม style สำหรับ FormControlLabel
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: "-8px",
          marginBottom: 0, // ลบ margin ล่างออกเพื่อให้ gap ควบคุมระยะห่างได้
          marginTop: 0, // ลบ margin บนออกเพื่อให้ gap ควบคุมระยะห่างได้
        },
      },
    },

    MuiPickersDay: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#A62D82", // สีม่วงตามที่ต้องการ
            color: "#FFFFFF", // สีขาวสำหรับตัวเลข
            "&:hover": {
              backgroundColor: "#8e2771", // สีเข้มขึ้นเมื่อ hover
            },
          },
        },
      },
    },
  },
});

// Styled DatePicker
const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    height: "48px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    borderColor: "#D6D9E4",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#A62D82",
    borderWidth: "1px",
  },
}));

// สไตล์สำหรับส่วนแสดงข้อมูล JSON
const JsonDisplay = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f8f9fc",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  overflow: "auto",
  maxHeight: "500px",
  "& pre": {
    margin: 0,
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: 1.5,
  },
}));

export default function InputPage() {
  const [normalInput, setNormalInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [date, setDate] = useState(null);
  const [dropdownValue, setDropdownValue] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [number, setNumber] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [formData, setFormData] = useState(null);
  const tagInputRef = useRef(null);

  // State สำหรับ Checkbox ปกติ
  const [checkboxes, setCheckboxes] = useState({
    choice1: false,
    choice2: false,
    choice3: false,
    choice4: false,
  });

  const handleNormalInputChange = (e) => {
    setNormalInput(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (tagInput.trim() !== "") {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    }
  };

  // เพิ่มฟังก์ชัน handleTagInputBlur สำหรับจัดการเมื่อ out of focus
  const handleTagInputBlur = (e) => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleTagDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleTagAreaClick = () => {
    if (tagInputRef.current) {
      tagInputRef.current.focus();
    }
  };

  const handleNormalCheckboxChange = (event) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // จัดเตรียมข้อมูลที่จะแสดง
    const dataToDisplay = {
      normalInput,
      passwordInput,
      date: date ? date.toISOString().split("T")[0] : null,
      dropdownValue,
      tags,
      number,
      checkboxes,
      radioValue,
    };

    // อัปเดต state เพื่อแสดงข้อมูล
    setFormData(dataToDisplay);

    console.log("Form submitted", dataToDisplay);
  };

  return (
    <ThemeProvider theme={theme}>
      <style jsx global>
        {datePickerStyles}
      </style>

      <div className="row">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Inputs</h1>
          <p className="text mb-8 leading-loose">
            อันนี้จะเป็น Form ที่ถูกสร้างขึ้นจาก{" "}
            <a href="https://mui.com/material-ui/getting-started/installation/" target="_blank">
              MUI
            </a>{" "}
            ด้วย Command line ง่าย <code>npm install @mui/material @emotion/react @emotion/styled</code> ถ้าจะใช้ใช้งาน Iput พวกนี้ก็ดู Code
            ได้ใน{" "}
            <a href="https://github.com/boatbie14/merry-match-design-system" target="_blank">
              Github
            </a>{" "}
            ใน <code>src/app/input/page.js</code> ถ้าเอา Code ไปใช้ให้ระวังในส่วนของการ Import component ด้วนเพราะต้องติดตั้งเพิ่มอย่าง{" "}
            <code>{`import {DatePicker} from "@mui/x-date-pickers/DatePicker";`}</code>
            <br />
            ถ้าเป็นไปได้ก็อยากจะแยก Input แต่ละอันเป็น component เพราะจะต้องเรียกใช้บ่อย ๆ
          </p>
          <div className="w-full flex flex-row">
            <div className="w-1/2">
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  maxWidth: 500,
                  p: 2,
                }}
                noValidate
                autoComplete="off"
              >
                {/* Normal Input */}
                <div>
                  <Box sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>Normal</Box>
                  <TextField
                    placeholder="Place Holder"
                    variant="outlined"
                    fullWidth
                    value={normalInput}
                    onChange={handleNormalInputChange}
                    sx={{
                      "& .MuiInputLabel-root": {
                        display: "none",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        legend: { display: "none" },
                      },
                    }}
                  />
                </div>

                {/* Password Input */}
                <div>
                  <Box sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>Password</Box>
                  <TextField
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                    fullWidth
                    value={passwordInput}
                    onChange={handlePasswordInputChange}
                    sx={{
                      "& .MuiInputLabel-root": {
                        display: "none",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        legend: { display: "none" },
                      },
                    }}
                  />
                </div>

                {/* Dropdown */}
                <div>
                  <Box sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>Dropdown</Box>
                  <Select
                    value={dropdownValue}
                    onChange={(e) => setDropdownValue(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    fullWidth
                    sx={{
                      height: "48px",
                      "& .MuiSelect-select": {
                        color: dropdownValue ? "inherit" : "#A0A3BD",
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          borderRadius: "8px",
                          marginTop: "4px",
                        },
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      <span style={{ color: "#A0A3BD" }}>Place Holder</span>
                    </MenuItem>
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                  </Select>
                </div>

                {/* Date Picker */}
                <div>
                  <Box sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>Date Picker</Box>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StyledDatePicker
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      format="dd/MM/yyyy"
                      slots={{
                        openPickerIcon: CalendarIcon,
                      }}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          placeholder: "Place Holder",
                          sx: {
                            "& .MuiInputLabel-root": {
                              display: "none",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              legend: { display: "none" },
                            },
                          },
                        },
                        desktopPaper: {
                          sx: {
                            borderRadius: "8px",
                            "& .MuiPickersDay-root.Mui-selected": {
                              backgroundColor: "#A62D82",
                              color: "#FFFFFF",
                              "&:hover": {
                                backgroundColor: "#8e2771",
                              },
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                </div>

                {/* Multi select */}
                <div>
                  <Box sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>Multi select (Type and Enter)</Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "4px",
                      minHeight: "48px",
                      width: "100%",
                      border: "1px solid #D6D9E4",
                      borderRadius: "8px",
                      padding: "8px",
                      "&:focus-within": {
                        borderColor: "#A62D82",
                      },
                      cursor: "text",
                    }}
                    onClick={handleTagAreaClick}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {tags.map((tag, index) => (
                      <Chip key={index} label={tag} onDelete={() => handleTagDelete(tag)} />
                    ))}
                    <input
                      ref={tagInputRef}
                      value={tagInput}
                      onChange={handleTagInputChange}
                      onKeyDown={handleTagInputKeyDown}
                      onBlur={handleTagInputBlur} // เพิ่ม event handler สำหรับ blur
                      style={{
                        flex: "1 0 100px",
                        border: "none",
                        outline: "none",
                        backgroundColor: "transparent",
                        fontSize: "16px",
                        padding: "4px",
                        minWidth: "100px",
                      }}
                      placeholder={tags.length === 0 ? "Type and press Enter" : ""}
                    />
                  </Box>
                </div>

                {/* Number */}
                <div>
                  <Box sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>Number</Box>
                  <TextField
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    variant="outlined"
                    fullWidth
                    placeholder="Number"
                    sx={{
                      "& .MuiInputLabel-root": {
                        display: "none",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        legend: { display: "none" },
                      },
                      "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                        WebkitAppearance: "inner-spin-button",
                        margin: 0,
                      },
                    }}
                  />
                </div>

                {/* Normal Checkboxes */}
                <div>
                  <Box sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>Checkbox</Box>
                  <FormControl component="fieldset">
                    <StyledFormGroup>
                      <FormControlLabel
                        control={
                          <CustomCheckbox
                            name="choice1"
                            checked={checkboxes.choice1}
                            onChange={handleNormalCheckboxChange}
                            icon={<span />}
                            checkedIcon={<CheckIcon />}
                          />
                        }
                        label="Choice 1"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            ml: 1,
                            color: "#111827",
                            fontSize: "16px",
                          },
                        }}
                      />
                      <FormControlLabel
                        control={
                          <CustomCheckbox
                            name="choice2"
                            checked={checkboxes.choice2}
                            onChange={handleNormalCheckboxChange}
                            icon={<span />}
                            checkedIcon={<CheckIcon />}
                          />
                        }
                        label="Choice 2"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            ml: 1,
                            color: "#111827",
                            fontSize: "16px",
                          },
                        }}
                      />
                      <FormControlLabel
                        control={
                          <CustomCheckbox
                            name="choice3"
                            checked={checkboxes.choice3}
                            onChange={handleNormalCheckboxChange}
                            icon={<span />}
                            checkedIcon={<CheckIcon />}
                          />
                        }
                        label="Choice 3"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            ml: 1,
                            color: "#111827",
                            fontSize: "16px",
                          },
                        }}
                      />
                      <FormControlLabel
                        control={
                          <CustomCheckbox
                            name="choice4"
                            checked={checkboxes.choice4}
                            onChange={handleNormalCheckboxChange}
                            icon={<span />}
                            checkedIcon={<CheckIcon />}
                          />
                        }
                        label="Choice 4"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            ml: 1,
                            color: "#111827",
                            fontSize: "16px",
                          },
                        }}
                      />
                    </StyledFormGroup>
                  </FormControl>
                </div>

                {/* Radio Buttons */}
                <div>
                  <Box sx={{ fontSize: "16px", fontWeight: 500, mb: 1 }}>Radio</Box>
                  <FormControl component="fieldset">
                    <StyledRadioGroup aria-label="team" name="team" value={radioValue} onChange={handleRadioChange}>
                      <FormControlLabel
                        value="tottenham"
                        control={
                          <CustomRadio
                            icon={<span />}
                            checkedIcon={
                              <span
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  backgroundColor: "white",
                                  display: "block",
                                  margin: "0 auto",
                                }}
                              />
                            }
                          />
                        }
                        label="Tottenham"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            ml: 1,
                            color: "#111827",
                            fontSize: "16px",
                          },
                        }}
                      />
                      <FormControlLabel
                        value="liverpool"
                        control={
                          <CustomRadio
                            icon={<span />}
                            checkedIcon={
                              <span
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  backgroundColor: "white",
                                  display: "block",
                                  margin: "0 auto",
                                }}
                              />
                            }
                          />
                        }
                        label="Liverpool"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            ml: 1,
                            color: "#111827",
                            fontSize: "16px",
                          },
                        }}
                      />
                      <FormControlLabel
                        value="manutd"
                        control={
                          <CustomRadio
                            icon={<span />}
                            checkedIcon={
                              <span
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  backgroundColor: "white",
                                  display: "block",
                                  margin: "0 auto",
                                }}
                              />
                            }
                          />
                        }
                        label="Man Utd"
                        sx={{
                          "& .MuiFormControlLabel-label": {
                            ml: 1,
                            color: "#111827",
                            fontSize: "16px",
                          },
                        }}
                      />
                    </StyledRadioGroup>
                  </FormControl>
                </div>

                <button className="primary-btn w-fit" type="submit">
                  Submit
                </button>
              </Box>
            </div>
            <div className="w-1/2 bg-gray-100 p-8">
              <h3 className="text-xl font-bold pb-3">Form Data</h3>
              <div className="showData">
                {formData && (
                  <div>
                    <JsonDisplay>
                      <pre>{JSON.stringify(formData, null, 2)}</pre>
                    </JsonDisplay>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
