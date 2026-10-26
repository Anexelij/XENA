// Orange client-logo marquee, shown below the hero.
const CLIENTS = [["c1", 300], ["c2", 300], ["c3", 300], ["c4", 98], ["c5", 99], ["c6", 300]];

export function ClientBar() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <div className="mq bar-h" aria-label="Clients">
      <div className="mq-track">
        {[...row, ...row].map(([n, w], i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={`/logos/${n}.png`} alt="" width={Math.round(w * 0.45)} />
        ))}
      </div>
    </div>
  );
}
