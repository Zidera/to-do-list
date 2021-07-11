export const removeDatasRepetidas = (datas) => {

  const datasUnicas = []
  datas.forEach((data => {
    if(datasUnicas.indexOf(data.dataFormatada) === -1){

      datasUnicas.push(data.dataFormatada)
    }
  }));
  return datasUnicas
}

export const ordenaDatas = (data) => {
  data.sort((a,B) =>{
    const primeiraData = moment(a,'DD/MM/YYYY').format('YYYYMMDD');
    const segundaData = moment(B,'DD/MM/YYYY').format('YYYYMMDD');

    return primeiraData - segundaData
  })
}