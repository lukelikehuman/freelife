import React from 'react';
import { MapPin, Navigation, Train } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">教室位置</h2>
          <p className="text-slate-500 text-lg">位於高雄火車站站前，交通最便利的運動空間</p>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-stone-200">
          {/* Map Section */}
          <div className="w-full md:w-2/3 h-64 md:h-auto min-h-[300px] bg-stone-200 relative">
             <iframe 
               src="https://maps.google.com/maps?q=高雄市新興區中山一路253-1號&z=17&output=embed" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Studio Location"
               className="absolute inset-0"
             ></iframe>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
            <div className="mb-6">
              <div className="flex items-center mb-2 text-teal-600 font-bold text-xl">
                <MapPin className="w-6 h-6 mr-2" />
                <span>教室地址</span>
              </div>
              <p className="text-slate-900 text-lg font-bold leading-relaxed mb-4">
                高雄市新興區中山一路 253-1 號
              </p>
              
              <div className="flex items-start text-slate-600 leading-relaxed mb-2">
                 <Train className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                 <span>
                   <strong>交通指引：</strong><br/>
                   高雄火車站（捷運/火車）步行 3 分鐘<br/>
                   美麗島捷運站 步行 5-8 分鐘
                 </span>
              </div>
            </div>

            <div className="p-4 bg-stone-50 rounded-lg border-l-4 border-teal-500">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <Navigation className="w-4 h-4 mr-2" />
                參觀須知
              </h4>
              <p className="text-sm text-slate-500">
                課程中教練需專注於教學，若需參觀場館或諮詢課程，<span className="text-teal-600 font-bold">請務必先加 LINE 預約</span>，以免現場無人接待撲空。
              </p>
            </div>
            
            <a 
              href="https://lin.ee/EwSR70X" 
              target="_blank" 
              rel="noreferrer"
              className="mt-8 block w-full bg-teal-800 text-white text-center font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300 shadow-md"
            >
              立即預約參觀
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;