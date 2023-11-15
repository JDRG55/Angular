export interface VentaI {
    
    fechaVenta: Date;
    subtotal: number;
    impuestos: number;
    descuentos: number;
    total: number;
    clienteId:number;
}