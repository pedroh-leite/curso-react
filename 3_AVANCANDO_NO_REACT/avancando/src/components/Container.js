
const Container = ({children, MyValue}) => {
  return (
    <div>
        <h2>Esse é o título do container</h2>
        {children}
        {MyValue}
    </div>
  )
}

export default Container