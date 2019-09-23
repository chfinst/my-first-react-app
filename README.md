# My Counter
1. Import the Header Component into `<App />` and pass it a proper title prop.
2. Import `<Counter />` into `<App />` 
3. Replace the text "NA" with the current counter state ({} is used to wrap javascript variables inside Jsx).
4. Create two functions: increment and decrement. Use the onClick property on the button tags to call the functions when the buttons are clicked.
5. Make `<Counter />` take initial state as a prop. Use this prop to set the initial state.
6. Pass the properties minCount and maxCount to `<Counter />` and prevent the user from choosing an illegal state. This can be done by setting the disabled property to true on the buttons.
7. Create a `<Button />` component that takes the props: onClick, disabled, className and text. Replace the given `<buttons />`s with your new fancy component. Protip: Checkout https://github.com/JedWatson/classnames for a neat library to join classNames together.
8. Make a button that, when clicked, resets the counter state.
9. Use your imagination to implement some new awesome features.