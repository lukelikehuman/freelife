import React from 'react';
import { Star, MapPin } from 'lucide-react';

const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      name: "Sunny Liu",
      date: "2 週前",
      rating: 5,
      text: "位置超級方便，就在高雄車站前面而已！皮拉提斯老師指令非常清晰，對於初學者很友善，上完課覺得核心真的有被啟動到，非常推薦！",
      avatar: "S"
    },
    {
      name: "Michael Chang",
      date: "1 個月前",
      rating: 5,
      text: "這裡的團體課程很多元，不會覺得枯燥。環境很明亮乾淨，而且離捷運站近，對於不騎車的人來說真的很方便。大推燃脂課程！",
      avatar: "M"
    },
    {
      name: "Emily Wu",
      date: "3 週前",
      rating: 5,
      text: "很喜歡這裡的皮拉提斯器械課，老師會很仔細調整動作細節。改善了我長期的下背痠痛問題，現在每週不來動一下全身都不對勁。",
      avatar: "E"
    }
  ];

  return (
    <section className="py-16 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center md:justify-start gap-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google Logo" 
                className="w-8 h-8"
              />
              Google 商家好評
            </h2>
            <div className="flex items-center mt-2 justify-center md:justify-start">
              <span className="text-2xl font-bold text-slate-800 mr-2">4.9</span>
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-slate-500 ml-2 text-sm">(真實學員評價)</span>
            </div>
          </div>
          
          <a 
            href="https://maps.google.com/?q=高雄市新興區中山一路253-1號" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 border border-stone-300 rounded-full text-slate-700 bg-white hover:bg-stone-50 transition duration-300 shadow-sm font-medium"
          >
            <MapPin className="w-4 h-4 mr-2 text-slate-500" />
            查看地圖所有評論
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-col h-full hover:-translate-y-1 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg mr-3">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                  <div className="text-slate-400 text-xs">{review.date}</div>
                </div>
              </div>
              <div className="flex text-orange-400 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;