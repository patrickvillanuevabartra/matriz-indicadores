/* ============================================================================
 *  CONFIG.JS — Aplicativo SGC ISO 21001 (Facultad de Ingeniería - URP)
 *  Módulo: Fichas de Proceso (N0/N1/N2) + Matriz de Indicadores + Metas
 *  Reutiliza el MISMO proxy y la MISMA base QuintaDB que Gestión de Riesgos.
 *  Todos los IDs verificados desde properties.json de cada tabla.
 * ============================================================================ */

const CONFIG = {

  // Mismo Web App de Apps Script que el aplicativo de riesgos (misma base).
  PROXY_URL: "https://script.google.com/macros/s/AKfycbxPGoHY5fyaBSyZRShw_8i4ax7AV37tFb_Engcb9Gcy14NILgFZ5mi6il5Kn9ksFnbO/exec",
  PROXY_TOKEN: "",

  APP_ID: "bxW5nYl8nlkOokW4JcMfb2",

  // ---- Tablas (entities) -------------------------------------------------
  ENTITIES: {
    FICHA_N0:     "cPWRXeWRrcK4kivMVdSY5l", // Ficha de Proceso Nivel 0
    FICHA_N1:     "dcPJraW45hsOokWQZcJ8kA", // Ficha de Proceso Nivel 1
    FICHA_N2:     "dcKg7dPWfdRyo7WPHVW511", // Ficha de Proceso Nivel 2
    SUBIND_FICHA: "cOW7VdImnlW59tW4zEzHm-", // Subform "Indicadores de desempeño ficha de procesos"
    MATRIZ_IND:   "c3tCkaW7PlAyotgSoCxSor", // Matriz de Indicadores
    PROG_METAS:   "b3ArS2hmjbhiovy1ddICkM", // Programación de metas
    SEG_METAS:    "cHW5tcJYfgWP9MmbBdSSo0", // Seguimiento de metas

    // Tablas maestras (relaciones) — mismas que riesgos
    TIPO_PROCESO: "axh8kJp11dJ4LFWOmle8o2",
    NIVEL0:       "czzdJdKmjnWPSYbSk7v8ot",
    NIVEL1:       "bjW7pcICjogOowWR_cISkf",
    NIVEL2:       "csA8ocWP1eW5aaW6lcUCkM",
    NIVEL3:       "dcRNhdP8ngEixcV8kmWP5v",
    PROCEDIMIENTO:"dcUCouymnkz4ovWRVdOmk0",
    RESPONSABLES: "cXW7_dOCnctOlcRSo6W4LK",
    RESP_PROCESO: "cPW44qr3vlW6XMn01eWPiv"
  },

  // ---- FICHA NIVEL 0 -----------------------------------------------------
  FICHA_N0_FIELDS: {
    tipo_proceso:      { id: "b-WR4SWOreWP3cJSoWqmk5", type: "rel", entity: "TIPO_PROCESO" },
    proceso_n0:        { id: "b6W4j3W7DdTBtdJGxdJre8", type: "rel", entity: "NIVEL0" },
    objetivo:          { id: "dcRCkqDmnoW6FcKwdcTcie", type: "text" },
    dueno:             { id: "ddUH4DW55euiDQDMtdJCo9", type: "rel", entity: "RESPONSABLES" },
    alcance:           { id: "cTWQilW5fdP4o2dIH8WQDK", type: "text" },
    base_legal:        { id: "cIW5OMW49pW4ekW4ddMsLc", type: "text" },
    proveedores:       { id: "akzCoXFCjblkRcOMxcR8o3", type: "text" },
    entrada:           { id: "cHWR3dLCjeyiofl8kwWOze", type: "text" },
    proceso_n1:        { id: "cCB05JDSnnWRBcNmkkm8oR", type: "rel", entity: "NIVEL1" },
    producto:          { id: "cgrSoeWRvcHykOeM3dOmo7", type: "text" },
    receptor:          { id: "cRgmkhWOzaW54OW6Dfdmk2", type: "text" },
    subform_indicador: { id: "bsv3XDWRjnEllcKSoJnmov", type: "subform", entity: "SUBIND_FICHA" },
    indicadores_txt:   { id: "ddSgtdVc5ieBldT8oMcmkS", type: "text" },
    controles:         { id: "c-mYf8aqDkW5Dej8kqmmkX", type: "text" },
    docs_internos:     { id: "ddKSoIibbgWPO8jCoTW4ry", type: "text" },
    docs_externos:     { id: "dcGa82WQ9cO4omEufTW6aF", type: "text" },
    rrhh:              { id: "bXW4pcMSjdiOtcVSoJC8oF", type: "text" },
    sistemas:          { id: "chW73cQLLdgOoaruquW70T", type: "text" },
    registros:         { id: "cSWPRdR1bgW7NcNmo5Afvc", type: "text" },
    instalaciones:     { id: "bQWOWVW5fjr4oQW6NdRSod", type: "text" },
    equipos:           { id: "bvW4pcQK1cS4ayCxVcQmk3", type: "text" },
    rel_matriz:        { id: "cJlmoqlmnhWOnooColW59p", type: "rel", entity: "MATRIZ_IND" },
    proceso_txt:       { id: "aPhmoBD35dUOoCkCk4FWv-", type: "text" } // ruta del proceso (texto)
  },

  // ---- FICHA NIVEL 1 -----------------------------------------------------
  FICHA_N1_FIELDS: {
    tipo_proceso:      { id: "cgWOKcWRXcNyo3aWhdKg8r", type: "rel", entity: "TIPO_PROCESO" },
    proceso_n0:        { id: "dcKtaGWOveWPzkWOSLuCkM", type: "rel", entity: "NIVEL0" },
    proceso_n1:        { id: "carv3cL8npB4ksEXdcVxyJ", type: "rel", entity: "NIVEL1" },
    objetivo:          { id: "dcH8oaWPPdPykkECovbSk-", type: "text" },
    dueno:             { id: "dcRcjPke1cJyFcHmk-fmkc", type: "rel", entity: "RESPONSABLES" },
    alcance:           { id: "cDtmoDW55pW6xcISkgW5Lc", type: "text" },
    base_legal:        { id: "bHW5mZW7vmCiongZddUZKV", type: "text" },
    proveedores:       { id: "bHWRjuWQbcUOkZW7hcVCop", type: "text" },
    entrada:           { id: "b7WO1UoqTdK4k2aSoHtSkv", type: "text" },
    proceso_n2:        { id: "cclgWVW6DdMyo-W4L3F8kX", type: "rel", entity: "NIVEL2" },
    proceso_n3:        { id: "caWRvKkCnkk5ihWO04fWrD", type: "rel", entity: "NIVEL3" },
    procedimiento:     { id: "bTWOZcISnfWPZcOSk9WQ0L", type: "rel", entity: "PROCEDIMIENTO" },
    producto:          { id: "asWPRcVXzlxQ1iW5ZdHeOI", type: "text" },
    receptor:          { id: "cTo8o_uZfmkARdLSo0aCoa", type: "text" },
    subform_indicador: { id: "cWFGvIW6fhoPqlqYvVWP1r", type: "subform", entity: "SUBIND_FICHA" },
    indicadores_txt:   { id: "cFCN1PWQjaWP_dSCoSumkt", type: "text" },
    controles:         { id: "ddSh4AWOfdMjldL1HgB8kk", type: "text" },
    docs_internos:     { id: "ddHw_dLxLcVOo5BY3cJ3e5", type: "text" },
    docs_externos:     { id: "bQWPlcS1ziW6ZdRcBcVHKN", type: "text" },
    rrhh:              { id: "bcWO5qpCnjwOoftSkOjXvP", type: "text" },
    sistemas:          { id: "aRW5FdPSnhWR3dVmksW780", type: "text" },
    registros:         { id: "bAgSocWRroDBfTh8kDE2jQ", type: "text" },
    instalaciones:     { id: "dcTSkHWPzmW6hcUrnAWQOJ", type: "text" },
    equipos:           { id: "cSW53dJsTitRK2WPjTWOv5", type: "text" },
    rel_matriz:        { id: "b9gJ8zW5fdMin7WQZdSqTh", type: "rel", entity: "MATRIZ_IND" },
    proceso_txt:       { id: "ckW7_dQSjdiRyExmkGvgPt", type: "text" } // ruta del proceso (texto)
  },

  // ---- FICHA NIVEL 2 -----------------------------------------------------
  FICHA_N2_FIELDS: {
    tipo_proceso:      { id: "afW7ddHCncmkaEWRelfgG8", type: "rel", entity: "TIPO_PROCESO" },
    proceso_n0:        { id: "cHWOhdJcTdUio1WOaRW5m4", type: "rel", entity: "NIVEL0" },
    proceso_n1:        { id: "dcGCodlgndJOk2lSkYW5KP", type: "rel", entity: "NIVEL1" },
    proceso_n2:        { id: "cNW7SWbfbaW7pcV8kzBCo7", type: "rel", entity: "NIVEL2" },
    objetivo:          { id: "cSi8ogW7vop5NdU8oIW583", type: "text" },
    dueno:             { id: "auW74wF3DiW53dINpcGCo3", type: "rel", entity: "RESPONSABLES" },
    alcance:           { id: "coW7ZdS2ncI4o_FrjZtSot", type: "text" },
    base_legal:        { id: "a1WRlcSCnkW6qwWOiRiSkm", type: "text" },
    proveedores:       { id: "bds8onW4XaW4eyW7qcbdml", type: "text" },
    entrada:           { id: "c7l2C7CrvdLOkqWPVdJCoM", type: "text" },
    proceso_n3:        { id: "dcHuDradLcl5moW6W_WO54", type: "rel", entity: "NIVEL3" },
    procedimiento:     { id: "cgW4mZWPzdPyoNWRxdTCkh", type: "rel", entity: "PROCEDIMIENTO" },
    producto:          { id: "ddTCkvWPbcVyoDW4HGlSkN", type: "text" },
    receptor:          { id: "b7W5RcJ8nmW5hdGX8IvCoU", type: "text" },
    subform_indicador: { id: "ddVMa0CvndOk9XW4FcICkD", type: "subform", entity: "SUBIND_FICHA" },
    indicadores_txt:   { id: "c4sCkoAYzcGllcLfBcSCon", type: "text" },
    controles:         { id: "bfW4RdPSjiWRBcISo4WQr8", type: "text" },
    docs_internos:     { id: "anWOVdOSjjFikyWRLVW4ul", type: "text" },
    docs_externos:     { id: "dcLmkoF2LpW6DkaCkjW6ig", type: "text" },
    rrhh:              { id: "b6WPr4bWbdJPbDANxdVmk0", type: "text" },
    sistemas:          { id: "aUW5xcL8jnkOkucCkFCmk0", type: "text" },
    registros:         { id: "cTWRrKoxrdUikeWRXKtmkj", type: "text" },
    instalaciones:     { id: "c-qCobW7fdVikqW6fyW6am", type: "text" },
    equipos:           { id: "cYadbKW7nnWPW_kSkHWQmX", type: "text" },
    rel_matriz:        { id: "cmC3GrWOLdRiodW4JdUu8S", type: "rel", entity: "MATRIZ_IND" },
    proceso_txt:       { id: "bqd8ken8jbWRGnWQddVmkM", type: "text" } // ruta del proceso (texto)
  },

  // ---- SUBFORMULARIO "Indicadores de desempeño ficha de procesos" --------
  SUBIND_FICHA_FIELDS: {
    indicador: { id: "dcTSkhC0TdPioNpmkxW6HR", type: "string" }
  },

  // ---- MATRIZ DE INDICADORES ---------------------------------------------
  MATRIZ_IND_FIELDS: {
    oficina_medicion:    { id: "cBAGCMWR1jhQbxh1XqmbnD", type: "select" }, // desplegable largo de unidades
    tipo_proceso:        { id: "c3futcT8nioikNESkIW6Kg", type: "rel", entity: "TIPO_PROCESO" },
    proceso_n0:          { id: "dcImoGWPHdH4kJWQ4Ey8kG", type: "rel", entity: "NIVEL0" },
    proceso_n1:          { id: "coW4RcPundKikJqtTdbLS5", type: "rel", entity: "NIVEL1" },
    proceso_n2:          { id: "dcOqVdOCngBikvhmkMgIzZ", type: "rel", entity: "NIVEL2" },
    proceso_n3:          { id: "cyb1X-WQ9cKyoWm8knW7fk", type: "rel", entity: "NIVEL3" },
    procedimiento:       { id: "bvWOfmnSnlmyJdLLKDdWmV", type: "rel", entity: "PROCEDIMIENTO" },
    objetivo_n0:         { id: "aqyvlcJ8nhCz_dNmomW78y", type: "linked_column", readOnly: true },
    objetivo_n1:         { id: "afWPG0W6zgWOaNWPZcOGr_", type: "linked_column", readOnly: true },
    objetivo_n2:         { id: "dcIWKXtcLaxyk3WRXGvCoz", type: "linked_column", readOnly: true },
    indicador_n0:        { id: "dcV2DJFd5mWQRcJ8oXqCkd", type: "rel", entity: "FICHA_N0" }, // jala ficha N0
    indicador_n1:        { id: "cYWPyaurzdSPZcVfiFW5qN", type: "rel", entity: "FICHA_N1" }, // jala ficha N1
    indicador_n2:        { id: "dcKCkGExvcMP_cM8ktrCk9", type: "rel", entity: "FICHA_N2" }, // jala ficha N2
    formula:             { id: "ddHqNdG1fdHAxcLCoRW7OI", type: "text" },
    fuente_info:         { id: "a3WOPIWQPcJ7FcOgX3gSkB", type: "text" },
    oficina_resp_ind:    { id: "cKlmoTBSjjW4RcHmk0Bvet", type: "string" },
    responsable_medicion:{ id: "ddKSocWPXbaQ0afL9ai8oq", type: "rel", entity: "RESP_PROCESO" },
    frecuencia_medicion: { id: "ajDaibWQndNkxdH0NdQ8kl", type: "select", options: ["Mensual","Bimensual","Trimestral","Semestral","Anual","A demanda"] },
    frecuencia_calculo:  { id: "ddNCkwW5PcMOoKW5tcUduy", type: "select", options: ["Mensual","Bimensual","Trimestral","Semestral","Anual","A demanda"] },
    prog_metas:          { id: "dcP8kTvSnks4kQWQmXWPTj", type: "linked_records", entity: "PROG_METAS", readOnly: true },
    seg_metas:           { id: "ddR8orW4XdJAdcU39nFmk9", type: "linked_records", entity: "SEG_METAS", readOnly: true },
    indicador_txt:       { id: "ddJCkVBmjlW5JcSX3dKmo6", type: "text" } // indicador concreto (texto, robusto)
  },

  // ---- PROGRAMACIÓN DE METAS ---------------------------------------------
  PROG_METAS_FIELDS: {
    rel_matriz:    { id: "ddH8k5t8jfBioNWO3dTSkH", type: "rel", entity: "MATRIZ_IND" },
    indicador_n0:  { id: "cWWR7cIrLgWOSukSowxmok", type: "linked_column", readOnly: true },
    indicador_n1:  { id: "ddObvpWP5dQ67dQSkmfI5v", type: "linked_column", readOnly: true },
    indicador_n2:  { id: "c5jCotWQXdSzJdOtxdNSka", type: "linked_column", readOnly: true },
    formula:       { id: "bTvComd8nnW4HVpSoCWR51", type: "linked_column", readOnly: true },
    fecha_prog:    { id: "cTAmo-oSjbWRHAicVdQCoB", type: "date" },
    valor_ref:     { id: "aFW7RdKSjlWRZcRvG3FSoX", type: "float" }, // ✅ conservado
    valor_meta:    { id: "cJWP0pW7jdHykGW6BcNSoQ", type: "float" },
    plan_accion:   { id: "dcSmosW6rpr6NcIdnRyCkJ", type: "file" },
    observacion:   { id: "aIW4tdIG9cQ5hdTJaVrSk-", type: "text" }
  },

  // ---- SEGUIMIENTO DE METAS ----------------------------------------------
  SEG_METAS_FIELDS: {
    rel_matriz:      { id: "dcPXBdN8jeWPRdRr_cKmof", type: "rel", entity: "MATRIZ_IND" },
    indicador_n0:    { id: "dcMXa-wuzdwBZdO8oAA8kX", type: "linked_column", readOnly: true },
    indicador_n1:    { id: "afx3ZcNmjclARcHdZdKCoZ", type: "linked_column", readOnly: true },
    indicador_n2:    { id: "c6WQ7dLCndW7HTe2VcQmoE", type: "linked_column", readOnly: true },
    formula:         { id: "cVBCoUwSnku43cNSkSc8kE", type: "linked_column", readOnly: true },
    fecha_prog:      { id: "ddPtqaaCjlWPhcGmo9WPGr", type: "linked_column", readOnly: true },
    rel_prog_meta:   { id: "cVW6baqNDee4opWOqmW6L7", type: "rel", entity: "PROG_METAS" }, // "Valor de referencia" = rel a la meta
    valor_meta:      { id: "cQsmo-W41duykKWPm9fveR", type: "linked_column", readOnly: true },
    fecha_eval:      { id: "cElXS8WObcNyofqdzKWRbl", type: "date" },
    valor_real:      { id: "dcQXmLW6ndUQhcLttdQmox", type: "float" },
    evidencias:      { id: "bvWPRcReDcMRZdTdJdVCoY", type: "file" },
    pct_avance:      { id: "bkWRiHlK1dJ4kyzCoTp2WJ", type: "formula", readOnly: true }, // (real/meta)*100
    plan_remediacion:{ id: "dcJ8ooWPDhW6hdKvGIWRmk", type: "file" },
    observacion:     { id: "dcRSk6W5Lbnyk_WQGPBCk7", type: "text" }
  }
};

if (typeof module !== "undefined") { module.exports = CONFIG; }
