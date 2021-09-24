/**
 * Função para formatar a data de acordo com o padrão do aplicativo. Se não enviar nenhuma
 * por parametro, formata a data atual.
 * @param {*} date 
 * @returns 
 */ 
function returnDate(date = new Date()) {
    let today = new Date(date+" EDT");
    let dayOfWeek = today.toLocaleDateString("en-us", { weekday: "short" });
    let month = today.toLocaleDateString("en-us", { month: "short" });
    today = today.toLocaleDateString().split("/");
    return `${dayOfWeek}, ${today[0]} ${month}`  
    
}

export { returnDate }