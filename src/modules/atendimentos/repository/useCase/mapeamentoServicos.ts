import _ from "lodash";

export class MapeamentoServicos {
  async mapearServicos(result: any) {
    const groupedData = _.groupBy(result, (row) => row.nr_atendimento);
    const atendimentosMapeados = _.map(groupedData, (group) => {
      const {
        nr_atendimento,
        dh_inicio_atendimento,
        valor_total,
        qtd_servicos_atendimento,
        dh_fim_atendimento,
        status_atendimento,
        status_pagamento,
      } = group[0];

      const dadosCLiente = _.uniqBy(group, "cd_cliente").map((row) => {
        const { cliente, cd_cliente, contato } = row;

        return {
          cliente,
          cd_cliente,
          contato,
        };
      });

      const dadosServico = _.map(group, (row) => {
        const {
          nr_servico_atendimento,
          cd_veiculo,
          placa,
          cd_servico,
          tipo_veiculo,
          modelo_veiculo,
          valor,
          servico,
          status_servico,
          dh_inicio_servico,
          dh_fim_servico,
        } = row;

        return {
          nr_servico_atendimento,
          cd_veiculo,
          placa,
          cd_servico,
          tipo_veiculo,
          modelo_veiculo,
          valor,
          servico,
          status_servico,
          dh_inicio_servico,
          dh_fim_servico,
        };
      });

      const atendimentoData = {
        nr_atendimento,
        dh_inicio_atendimento,
        valor_total,
        qtd_servicos_atendimento,
        dh_fim_atendimento,
        status_atendimento,
        status_pagamento,
        dadosCLiente: dadosCLiente,
        dadosServico,
      };

      return {
        dadosAtendimento: atendimentoData,
      };
    });

    const sortedAtendimentos = _.orderBy(
      atendimentosMapeados,
      ["dadosAtendimento.nr_atendimento"],
      ["desc"]
    );

    return sortedAtendimentos;
  }
}
