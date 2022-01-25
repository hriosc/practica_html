console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let interno = forma['interno'];
    let externo = forma['externo'];
    let entregas = forma['entregas'];
    let prov = forma['prov'];
    console.log(interno.value)
    console.log(externo.value)
    console.log(entregas.value)
    console.log(prov.value)
    console.log(`Resultado: ${interno.value}`);
    let resultado = parseInt(interno.value) + parseInt(externo.value)+parseInt(entregas.value)+parseInt(prov.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}