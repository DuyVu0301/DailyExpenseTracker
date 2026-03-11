import { Wallet, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Thẻ Card Tổng số dư */}
      <div className="glass-card w-full max-w-md p-8 group transition-all duration-500 hover:border-white/20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold">
              Tổng số dư
            </p>
            <h2 className="text-4xl font-bold text-white mt-2 tracking-tight">
              25.000.000<span className="text-accent ml-1 text-2xl">đ</span>
            </h2>
          </div>
          <div className="bg-accent/10 p-3 rounded-2xl border border-accent/20 group-hover:scale-110 transition-transform">
            <Wallet className="text-accent" size={28} />
          </div>
        </div>

        {/* Thu nhập & Chi tiêu */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl">
            <div className="flex items-center gap-2 mb-1">
              <ArrowUpCircle className="text-emerald-500" size={16} />
              <span className="text-slate-400 text-[10px] font-bold uppercase">
                Thu nhập
              </span>
            </div>
            <p className="text-white font-bold">+10.000.000đ</p>
          </div>

          <div className="bg-rose-500/5 border border-rose-500/10 p-4 rounded-2xl">
            <div className="flex items-center gap-2 mb-1">
              <ArrowDownCircle className="text-rose-500" size={16} />
              <span className="text-slate-400 text-[10px] font-bold uppercase">
                Chi tiêu
              </span>
            </div>
            <p className="text-white font-bold">-2.500.000đ</p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-slate-500 text-xs font-medium tracking-widest uppercase">
        FinTrack • Hệ thống quản lý tài chính
      </p>
    </div>
  );
}

export default App;
