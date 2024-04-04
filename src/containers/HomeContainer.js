import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'

// connects the Redux state to a component's props,
const mapStateToProps=state=>({
    // data:state.cardItems
})
// connects Redux actions to a component's props
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;