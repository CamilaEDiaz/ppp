using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,
//porque Task es una palabra Reservada de .NetCore
/// </Summary>
///
namespace Practica.Models
{
public class IpsItem
{


public int id { get; set; }

public decimal vHospitalizacion { get; set; }

public decimal salario { get; set; }

public decimal liquidacion { 
    get{
        if(salario>2500000){
            return 0.2m * vHospitalizacion;
        }else{
            return 0.1m * vHospitalizacion;
        }
    } 
    set{} }
}
}

