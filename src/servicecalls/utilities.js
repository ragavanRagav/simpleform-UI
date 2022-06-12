
const isNullish =(obj) =>{
  for (const value of Object.values(obj)) {
    if (value === null || value === undefined || value === '') {
      return true
    }
  }
	return false
}

export {isNullish}