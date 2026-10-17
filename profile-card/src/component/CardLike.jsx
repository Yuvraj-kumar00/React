const CardLike = ({ stats }) => {

  return (
    <>
      {stats.map((item, idx) => {
        const Icon = item.icon;

        return (
          <div key={idx} className="flex items-center gap-0.5">
            <Icon className="w-3" />
            <p className="text-[12px]">{item.count} |</p>
          </div>
        )
      })}

    </>
  )
}

export default CardLike
