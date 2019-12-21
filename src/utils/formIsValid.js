export default errorsState => Object.entries(errorsState).filter(([k, v], i) => !!v).length === 0
