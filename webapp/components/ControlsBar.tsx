'use client';
export default function ControlsBar(){
  return (
    <div className="fixed bottom-0 inset-x-0 p-4 bg-neutral-900/70 backdrop-blur border-t border-neutral-800 flex items-center gap-3">
      <button className="px-3 py-2 rounded-lg bg-neutral-800">Play</button>
      <button className="px-3 py-2 rounded-lg bg-neutral-800">Pause</button>
      <button className="px-3 py-2 rounded-lg bg-neutral-800">Skip</button>
    </div>
  );
}
