'use client'
const Button = ({title}:{
    title:string
}) => {
  return (
    <button
    className="mt-4 bg-blue-500 text-white p-2 rounded"
    onClick={() => navigator.clipboard.writeText(title)}
  >
    Copy Title
  </button>
  )
}

export default Button
