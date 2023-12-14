export interface criarServicoDTO {
    desc_servico: string;
    vlr_servico: number;
}
export interface updateServiceDTO {
    cd_servico: number;
    desc_servico: string;
    vlr_servico: number;
}
export interface vinculoVeiculoServico {
    cd_servico: number[];
    cd_tipo_veiculo: number;
}
export interface vinculoVeiculoServicoEditar {
    cd_servico: number[];
    cd_tipo_veiculo: number;
    sequencia: number;
}

export interface FiltroListagem {
    servico?: string;
    veiculo?: string;
}