export default function HoverCard({ data }: any) {
  return (
    <div
      style={{
        top: 42,
      }}
      className="absolute -ml-60 w-[500px] bg-[#ffff] text-dark text-[13px] rounded-sm shadow-lg z-50"
    >
      <div className="flex flex-row">
        <div className="basis-2/4 justify-start text-start p-4 gap-5">
          {data[0]?.iconsTitle?.map((item, i) => (
            <div key={i} className="py-3">
              <a href={item.link}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
                <span className="">{item.arrow}</span>
              </a>
            </div>
          ))}
        </div>
        {data[1]?.content?.map((item, i) => (
          <div key={i} className="basis-2/4 bg-[#ebeef7] p-4 text-start">
            <h5 className="py-4">{item.title}</h5>
            <p className="pb-4 font-barlow">{item.des}</p>
            <p className="py-3">{item.des2}</p>
            <a
              href={item.link}
              className="perfectbtn font-input tracking-widest"
            >
              {item.btn} <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
