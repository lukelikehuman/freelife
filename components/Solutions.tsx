import React from 'react';
import { Activity, Users, MapPin } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "專業皮拉提斯",
      desc: "提供器械與墊上課程。專注於核心肌群訓練、脊椎活動度與肢體協調，從根本改善體態不正與痠痛問題。"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "多元團體課程",
      desc: "包含燃脂有氧、瑜珈伸展、TRX 懸吊訓練。小班制教學確保動作品質，享受流汗快感同時也兼顧安全。"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "絕佳站前地段",
      desc: "位於中山一路 253-1 號，高雄火車站與美麗島站皆可步行抵達。無論是通勤族或轉乘都超方便。"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-teal-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">為都會生活打造的全方位運動方案</h2>
          <p className="text-teal-100 text-lg">不只練身材，更練出好精神與好氣色</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((item, index) => (
            <div key={index} className="bg-teal-900/50 rounded-2xl p-8 text-center hover:bg-teal-800 transition duration-300 border border-teal-800 hover:border-orange-500/50 group">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-teal-100 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://lin.ee/EwSR70X" 
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold text-lg py-3 px-8 rounded-full transition duration-300"
          >
            預約體驗課程
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;