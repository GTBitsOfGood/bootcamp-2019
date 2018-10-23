# Exercise 1
### Getting our feet wet with React-Redux

 So far we have seen how to convert our simple [color toggle redux app]() to react-redux. The motivation for converting from using React alongside Redux to integrating React and Redux using [React-Redux]() (also called the React-Redux "bindings") was to remove the need to re-render our entire react app on each store change. 
 Before we "migrated" our color toggle redux app we had to subscribe the `render()` method to the store and each time we clicked the `ColorSquare` the `render()` method forced a new call to `ReactDOM.render()`. React-Redux bindings let us use `connect` in place of `store.subscribe()`. This way each component can be told to re-render instead of every component being forced to re-render.

 In this exercise we will get more practice with using the React-Redux bindings by applying the same steps to another simple redux app we have already seen ([Simple Redux Counter](https://codepen.io/rick-shar/pen/qrBwRz)). 

 1. Open up the settings tab on [codepen](https://codepen.io/rick-shar/pen/qrBwRz) and add the react-redux library
    
![](https://d3vv6lp55qjaqc.cloudfront.net/items/1j2I3y2m2x25092r2q0F/Screen%20Shot%202017-05-28%20at%205.11.11%20PM.png?v=aea6a25a)

1. Remove the `render()` method `store.subscribe(render)` call and `render()` call at the bottom of the javascript portion on codepen.

1. Add `ReactDOM.render(<Provider store={store}><Counter /></Provider>, document.getElementById('root'))` to replace the rendering we removed in the previous step. We need Provider so that the Counter component will be provided with store.

1. Import Provider from React-Redux since we are using it in the last step (add `const { Provider } = ReactRedux` at the top)

1. At this pointer the counter buttons will reappear but no value will be shown

![](https://d3vv6lp55qjaqc.cloudfront.net/items/260h0g2I2d3e1f3C0F0D/Screen%20Shot%202017-05-28%20at%205.20.37%20PM.png?v=fed2bf49)

1. Since the component is disconnected from the store at this point we need to reconnect it using `connect()` from the ReactRedux library. Lets also import `connect` by updating our `const { Provider } = ReactRedux` to `const { Provider, connect } = ReactRedux`.

1. If we recall our example during lecture the `connect()` function requires two functions `mapStateToProps` and `mapDispatchToProps`. Although this pair of functions sound complicated they are really simple! 
    
    - `mapStateToProps` is responsible for giving our component any pieces of state that this component needs.
    - `mapDispatchToProps` is responsible for giving our component any dispatch calls it needs.
    
1. If we look through the Counter component we notice that the `onClick` is using `store.dispatch()` so we need to supply that through `connect` which in turn needs to be supplied dispatch through `mapDispatchToProps`. Other than `onClick` there is no other mention of dispatch so we know that we can begin writing our `mapDispatchToProps` method.

1. Let's add the snippet below.
    ```javascript
       
        const mapDispatchToProps = (dispatch) => {
            return {
                onPlusClick: () => dispatch({type: 'INCREMENT'}),
                onMinusClick: () => dispatch({type: 'DECREMENT'}),
            }
        }
    
    ```

1. Since the Counter component will be supplied the logic for the two `onClick`s we can replace all the logic with nice and clean `<button onClick={this.props.onPlusClick} />` and `<button onClick={this.props.onMinusClick} />`.

1. We have not connected our Counter yet so dont be alarmed that the code appears to be broken.

1. We can see that our Counter component is also looking for `{this.props.value}` and that this prop is actually part of the state. So we need to map this part of the state to a prop on the component. So we add

    ```javascript

        const mapStateToProps = (state) => {
            return {
                value: state
            }
        }

    ```

1. In the case of `mapStateToProps` we dont have to make any changes to the Counter component since the Counter component is already looking for the counter value on `this.props.value` and matches the object we are returning from `mapStateToProps`.

1. We spent some effort in figuring out what `mapStateToProps` and `mapDispatchToProps` need to return, but in exchange we cleaned up our Counter component so that it doesnt contain any logic or direct dependence on redux. This independence can come in handy if we want to reuse this component in another project where we might not be using redux.

1. The reason we went through all this effort was to connect the Counter component to the state somehow (remember we removed subscribe). Since `connect()` from React-Redux requires `mapStateToProps` and `mapDispatchToProps` we had to write them first. Now we are ready to add one line which will replace our Counter component with a connected component. Add `Counter = connect(mapStateToProps,mapDispatchToProps)(Counter)` before the `ReactDOM.render()`.

1. Rejoice! Everything should be working again!

![](https://d3vv6lp55qjaqc.cloudfront.net/items/0k3A0A0Z1q0U09011G1M/Screen%20Recording%202017-05-28%20at%2005.59%20PM.gif?v=713df0df)

# Exercise 2
 [CLICK HERE FOR SECOND EXERCISE REPO](https://github.com/horizons-school-of-technology/todo-redux/)
