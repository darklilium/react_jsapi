
function getInfoTemplate(){
  return {
    getSubFailure(){
      let chqSubInfoTemp= new esri.InfoTemplate();
      chqSubInfoTemp.setTitle("<b>SED: ${ARCGIS.DBO.SED_006.codigo}</b>");
      //var tipo_estado = ${'ARCGIS.DBO.SED_006.codigo'};
    //  console.log(tipo_estado);
      let chqSubInfoContent =
      "<div style=padding-top: 10px;><b>ID Orden:</b> ${ARCGIS.dbo.POWERON_TRANSFORMADORES.id_orden}<br></div>"+
      "<div style=padding-top: 10px;><b>ID Incidencia:</b> ${ARCGIS.DBO.POWERON_ORDENES.id_incidencia}<br></div>"+
    //  "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Alimentador:</b> ${ARCGIS.DBO.SED_006.alimentador}<br></div>"+
    //  "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Causa:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.causa}<br></div>"+
    //  "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Comentario:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.comentario}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Estado:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.estado_orden}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Creación:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_creacion:DateFormat(datePattern:'dd MM yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Asignación:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_asignacion:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Despacho:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_despacho:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Ruta:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_ruta:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Llegada:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_llegada:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Tiempo transcurrido:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.TIEMPO_TRA}<br></div>"+
      "<div style=padding-top: 10px;><b>ETR:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.etr}<br></div>";
      chqSubInfoTemp.setContent(chqSubInfoContent);
      return chqSubInfoTemp;
    },
    getIsolatedNisFailure(){

      let chqIsolatedNisTemp= new esri.InfoTemplate();
      chqIsolatedNisTemp.setTitle("<b>NIS: ${ARCGIS.DBO.CLIENTES_XY_006.nis}</b>");

      let chqIsolatedNisInfoContent =
      "<div style=padding-top: 10px;><b>ID Orden:</b> ${ARCGIS.dbo.POWERON_CLIENTES.id_orden}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>ID Incidencia:</b> ${ARCGIS.dbo.POWERON_CLIENTES.id_incidencia}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Causa:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.causa}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Comentario:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.comentario}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Estado:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.estado_orden}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Creación:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_creacion:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Asignación:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_asignacion:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Despacho:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_despacho:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Ruta:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_ruta:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Fecha Llegada:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.fecha_llegada:DateFormat(datePattern:'dd/MM/yyyy')}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Tiempo transcurrido:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.TIEMPO_TRA}<br></div>"+
      "<div style=padding-top: 10px;><b>ETR:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.etr}<br></div>";

      chqIsolatedNisTemp.setContent(chqIsolatedNisInfoContent);
      return chqIsolatedNisTemp;
    },
    getNisInfo(){

      let chqNisInfoTemp= new esri.InfoTemplate();
      chqNisInfoTemp.setTitle("<b>NIS: ${ARCGIS.DBO.CLIENTES_XY_006.nis}</b>");

      let chqNisInfoContent =
      "<div style=padding-top: 10px;><b>ID Orden:</b> ${ARCGIS.dbo.POWERON_TRANSFORMADORES.id_orden}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>ID Incidencia:</b> ${ARCGIS.dbo.POWERON_TRANSFORMADORES.id_incidencia}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>SED:</b> ${ARCGIS.dbo.CLIENTES_DATA_DATOS_006.resp_id_sed}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Dirección:</b> ${ARCGIS.dbo.CLIENTES_DATA_DATOS_006.direccion_resu}<br></div>"+
  //    "<div style=display:inline-block;width:8px;></div>"+
      "<div style=padding-top: 10px;><b>Comuna:</b> ${ARCGIS.dbo.CLIENTES_DATA_DATOS_006.nm_comuna}<br></div>"+
      "<div style=padding-top: 10px;><b>ETR:</b> ${ARCGIS.DBO.%view_tiempo_order_po_3.etr}<br></div>"
  //    "<div style=display:inline-block;width:8px;></div>";

      chqNisInfoTemp.setContent(chqNisInfoContent);
      return chqNisInfoTemp;
    }

  }
}

export default getInfoTemplate();