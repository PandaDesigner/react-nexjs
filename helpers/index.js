export const formatDate = date =>{
    const newDate = new Date(date)

    const optionsDate ={
        year: 'numeric',
        month:'long',
        day:'2-digit'
    }

    return newDate.toLocaleDateString('es-ES', optionsDate)

}