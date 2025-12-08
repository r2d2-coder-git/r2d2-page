flowchart TB
  %% --- Dominios / Sistemas ---
  subgraph Ventas
    ECOM[eCommerce]
    TPV[TPV Tienda]
  end

  subgraph Operaciones
    OMS[OMS]
    WMS[WMS Almacen]
    TMS[TMS Transportes]
  end

  subgraph Cliente
    CRM[CRM]
    ATC[Atencion Cliente]
  end

  subgraph Backoffice
    ERP[ERP Finanzas]
  end

  subgraph Datos
    DWH[DWH Lakehouse]
    BI[BI Analytics]
    MDM[MDM]
  end

  subgraph Plataforma
    API[API Gateway]
    BUS[Event Bus Kafka SQS]
    SFTP[SFTP]
    ETL[ETL Jobs]
    CDC[CDC Replicacion]
    IAM[SSO IAM]
  end

  %% --- Real-time / APIs / Eventos ---
  ECOM -- REST JSON realtime --> API
  API  -- REST JSON --> OMS
  TPV  -- REST POS sync --> API
  API  -- REST JSON --> OMS

  ECOM -- Webhooks checkout --> OMS
  TMS  -- Webhook tracking --> OMS

  OMS  -- Eventos OrderCreated --> BUS
  BUS  --- Suscripcion realtime --- WMS
  BUS  --- Suscripcion realtime --- CRM
  BUS  --- Suscripcion realtime --- BI

  IAM  --- Auth SSO --- ECOM
  IAM  --- Auth SSO --- CRM
  IAM  --- Auth SSO --- BI

  %% --- Batch / Ficheros / ETL ---
  TPV  -- CSV diario --> SFTP
  SFTP -- pick up --> ETL
  ETL  -- carga batch --> OMS

  WMS  -- CSV horario --> SFTP
  SFTP -- pick up --> ETL
  ETL  -- carga batch --> OMS

  CRM  -- Maestro clientes diario --> MDM
  MDM  -- Golden records --> OMS

  ERP  -- CDC cambios contables --> CDC
  CDC  -- streaming batch --> DWH

  ETL  -- batch nocturno --> DWH
  DWH  -- modelos semanticos --> BI

  %% --- Leyenda rapida ---
  subgraph Leyenda
    L1[REST JSON realtime]
    L2[Webhooks]
    L3[Eventos en BUS]
    L4[CSV via SFTP]
    L5[CDC Replicacion]
    L6[Batch ETL]
  end
