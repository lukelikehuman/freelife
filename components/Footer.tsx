import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="py-16 bg-teal-950 text-white pb-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">現在預約，享首次團課體驗優惠</h2>
        <p className="text-teal-200 mb-12 text-lg">找回輕盈的身體，就從踏進教室開始。</p>

        {/* 流程步驟 */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center text-2xl font-bold mb-4 bg-teal-900 text-white">1</div>
            <span className="text-lg text-teal-100">點擊加 LINE</span>
          </div>
          <div className="hidden md:block w-12 h-0.5 bg-teal-800"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center text-2xl font-bold mb-4 bg-teal-900 text-white">2</div>
            <span className="text-lg text-teal-100">索取本月課表</span>
          </div>
          <div className="hidden md:block w-12 h-0.5 bg-teal-800"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-orange-500/50">3</div>
            <span className="text-lg font-bold text-orange-400">預約體驗課程</span>
          </div>
        </div>

        <p className="text-teal-400 text-sm">© {new Date().getFullYear()} 高雄站前皮拉提斯＆團體課程空間. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;