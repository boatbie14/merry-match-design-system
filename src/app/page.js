import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <div className="container mx-auto px-8 py-16 max-w-5xl">
      <div className="text-center mb-16">
        <div className="flex justify-center">
          <div className="flex flex-col items-start mb-6">
            <h1>
              Merry <span className="text-[#C70039] font-extrabold">Match</span>
            </h1>
            <p className="text-base md:text-lg text-black mt-[-8px]">Design System</p>
          </div>
        </div>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A comprehensive collection of reusable components and design standards to ensure consistency across the Merry Match platform. This
          design system helps developers build beautiful, accessible, and consistent user experiences quickly.
        </p>
        <br />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          หน้านี้ไม่มีอะไรแค่อยากทำไว้เท่ ๆ เดี๋ยวรวม Link ที่เกี่ยวข้องไว้ให้จะได้หาง่าย ๆ กรั๊ฟ
        </p>
        <ul className="max-w-3xl mx-auto">
          <li>
            <a href="https://trello.com/b/E1IKit6G/fsd8-merry-match" target="_blank" className="text-lg text-[#c80139] max-w-3xl mx-auto">
              trello
            </a>
          </li>

          <li>
            <a
              href="https://www.figma.com/design/hrHQRTVfoR2fiYwjQCHHWG/Merry-Match?node-id=0-1&t=7JSpsp1Pt0Jwecea-0"
              target="_blank"
              className="text-lg text-[#c80139] max-w-3xl mx-auto"
            >
              Figma
            </a>
          </li>

          <li>
            <a
              href="https://techup.notion.site/Merry-Match-Online-Dating-Web-App-1dfa2eebf310817b967bfb2da475cf0f"
              target="_blank"
              className="text-lg text-[#c80139] max-w-3xl mx-auto"
            >
              โจทย์
            </a>
          </li>

          <li>
            <a
              href="https://docs.google.com/document/d/1n0LgpUkPma2diSFbdm9Z4K_hmYBV_H1oHFw0ZyBmcek/edit?usp=sharing"
              target="_blank"
              className="text-lg text-[#c80139] max-w-3xl mx-auto"
            >
              Tech Stack
            </a>
          </li>

          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1Uev57Mw3jp7DQCpl2-cISz_W_YeEBdcHw_CEAs3BJXE/edit?usp=sharing"
              target="_blank"
              className="text-lg text-[#c80139] max-w-3xl mx-auto"
            >
              Team Norm
            </a>
          </li>

          <li>
            <a
              href="https://github.com/boatbie14/merry-match-design-system"
              target="_blank"
              className="text-lg text-[#c80139] max-w-3xl mx-auto"
            >
              Github สำหรับดู Code UI
            </a>
          </li>
        </ul>

        <br />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Typography"
          description="Consistent text styles and hierarchies to ensure readability and brand consistency."
          icon="📝"
          link="/typography"
        />
        <FeatureCard
          title="Colors"
          description="Our palette creates a vibrant, accessible, and emotionally resonant experience."
          icon="🎨"
          link="/color"
        />
        <FeatureCard
          title="Buttons"
          description="Interactive elements designed for clarity, accessibility, and consistent user experience."
          icon="👆"
          link="/button"
        />
        <FeatureCard
          title="Input Fields"
          description="Form elements that balance functionality with our unique design aesthetic."
          icon="⌨️"
          link="/input"
        />
        <FeatureCard
          title="Components"
          description="Building blocks that speed up development while maintaining design consistency."
          icon="🧩"
          link="/components"
        />
        <FeatureCard
          title="Guidelines"
          description="Best practices to ensure all Merry Match interfaces are cohesive and intuitive."
          icon="📋"
          link="/guidelines"
        />
      </div>
    </div>
  );
}
