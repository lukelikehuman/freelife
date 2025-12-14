import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">學員真實回饋</h2>
          <p className="text-slate-500 text-lg">聽聽他們如何在忙碌生活中找回健康平衡</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Case 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-100 group hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="relative h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="訓練前駝背" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500" 
                />
                <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</span>
              </div>
              <div className="relative h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="訓練後體態" 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white font-bold text-xs px-2 py-1 rounded">After</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2 text-slate-900">告別圓肩，感覺長高了！</h4>
              <p className="text-slate-600 italic">"長期用電腦讓我肩膀內縮嚴重。上了一個月的皮拉提斯器械課，老師很強調脊椎延伸，現在站著自然就挺胸了，朋友都說我看起來變高也變瘦了。"</p>
              <p className="text-sm text-slate-400 mt-2 text-right">— 行政人員 張小姐</p>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-100 group hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="relative h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="訓練前" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500" 
                />
                <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</span>
              </div>
              <div className="relative h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1599447332720-d4e6745582f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="訓練後" 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white font-bold text-xs px-2 py-1 rounded">After</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-2 text-slate-900">團課超舒壓，下班好去處</h4>
              <p className="text-slate-600 italic">"這裡離火車站很近，下班直接過來很方便。我很喜歡這裡的團體課氛圍，老師很有活力，大家一起流汗的感覺很棒，把整天工作的壓力都釋放掉了！"</p>
              <p className="text-sm text-slate-400 mt-2 text-right">— 通勤族 王先生</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;