export const Review = (props) => {
  return (
    <div className="w-full space-y-8">
      <div className="space-y-6">
        <div className="w-64 h-auto mx-auto border border-white rounded-full aspect-square"></div>
        <h1 className="text-3xl">{props.name}</h1>
      </div>
      <p className="text-base">
        {props.subtitle}
      </p>
    </div>
  )
}
