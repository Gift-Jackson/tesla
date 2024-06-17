import Title from "../Title"
import Transactions from "../Transactions"
import Wrapper from "../Wrapper"

const TransactionsPage = () => {
  return (
    <>
      <Wrapper>
        <Title title="Recent Transactions" />
        <Transactions/>
      </Wrapper>
    </>
  )
}

export default TransactionsPage