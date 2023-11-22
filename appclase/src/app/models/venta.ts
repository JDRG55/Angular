export interface VentaI {   
    id?:number;
    fechaVenta: Date;
    subtotal: number;
    impuestos: number;
    descuentos: number;
    total: number;
    clienteId:number;
}