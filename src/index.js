import  input from 'readline-sync';

console.log("Escolha uma das alternativas: \n");

const msn1 = '1 - Listar os salários mínimos de 2010 à 2020';
const msn2 = '2 - Listar o índice IPCA de 2010 à 2020';
const msn3 = '3 - Comparação entre o percentual de aumento salarial e o IPCA \n';

console.log(msn1);
console.log(msn2);
console.log(msn3);

let valor = input.question('Digite o número da sua escolha: ');

const divider = 100;

const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
const wages = [510, 545, 622, 678, 724, 788, 880, 937, 954, 998, 1045];
const inflationRates_ipca = [591, 650, 584, 591, 641, 1067, 629, 295, 375, 431, 452];

switch (valor) {
    case '1':
        for (let i = 0; i < years.length; i++) {
            console.log("\nAno: ".padEnd(60, '.') + years[i]);
            console.log("Salario mínimo: ".padEnd(59, '.') + "R$ " + wages[i] + ",00");    
        }
        break
    case '2':
        for (let i = 0; i < years.length; i++) {
            console.log("\nAno: ".padEnd(60, '.') + years[i]);
            console.log("Infação IPCA: ".padEnd(59, '.') + (inflationRates_ipca[i]/divider).toFixed(2).replace('.', ',') + "%"); 
        }
        break
    case '3':
        for (let i = 0; i < years.length; i++) {
            console.log("\nAno: ".padEnd(60, '.') + years[i]);
            console.log("Salario mínimo: ".padEnd(59, '.') + "R$ " + wages[i] + ",00");
            if (i === 0) {
                console.log("Crescimento Salarial: ".padEnd(59, '.') + "-");
            } else {
                console.log("Crescimento Salarial: ".padEnd(59, '.') + (((wages[i] - wages[i-1])/wages[i-1])*100).toFixed(2).replace('.', ',') + "%");
            }
            console.log("Infação IPCA: ".padEnd(59, '.') + (inflationRates_ipca[i]/divider).toFixed(2).replace('.', ',') + "%");     
        }
    default:
        console.log("Opção Inválida!");

}
