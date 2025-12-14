import React from 'react';
import { X } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      title: "久坐辦公室，腰痠背痛怎麼睡都不好？",
      desc: "長期姿勢不良導致核心無力、體態走樣。單純的按摩只能治標，你需要的是「正確的動起來」。"
    },
    {
      title: "害怕傳統健身房的大重量壓迫感？",
      desc: "不喜歡舉鐵、不喜歡陽剛的氛圍？我們的皮拉提斯與團體課程強調控制與延伸，優雅地鍛鍊肌力。"
    },
    {
      title: "下班想運動，但健身房離捷運站好遠？",
      desc: "時間就是金錢。我們位於高雄火車站／美麗島站中心點，交通最便利，讓你沒有藉口偷懶。"
    },
    {
      title: "一個人運動很無聊，難以堅持下去？",
      desc: "獨自跑步好枯燥？我們的團體課程氛圍熱絡，有夥伴互相激勵，讓運動成為期待而不是苦差事。"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">想運動，卻總是因為這些原因卻步？</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          {points.map((point, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm border-l-4 border-orange-400 transition-transform hover:scale-[1.01] duration-300">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                   <X className="text-orange-500 w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;