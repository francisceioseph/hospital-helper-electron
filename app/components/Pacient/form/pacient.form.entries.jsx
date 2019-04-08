import React from 'react';
import {
  Input, DatePicker, Select, Radio
} from 'antd';

import { SIMPLE_DATE_FORMAT_PT_BR } from '../../../utils/date-format';

export const getFullNameField = () => <Input />;
export const getCpfField = () => <Input />;
export const getCnsField = () => <Input />;
export const getMotherNameField = () => <Input />;
export const getGenderField = () => (
  <Select>
    <Select.Option value="masculino">Masculino</Select.Option>
    <Select.Option value="feminino">Feminino</Select.Option>
    <Select.Option value="none">Não Informado</Select.Option>
  </Select>
);
export const getBirthDateField = () => <DatePicker showToday format={SIMPLE_DATE_FORMAT_PT_BR} />;

export const getInputField = () => <Input />;

export const getYesNoRadio = () => (
  <Radio.Group>
    <Radio value>Sim</Radio>
    <Radio value={false}>Não</Radio>
  </Radio.Group>
);

export const getSkinColorField = () => (
  <Radio.Group>
    <Radio value="amarelo">Amarela</Radio>
    <Radio value="branco">Branca</Radio>
    <Radio value="indigena">Indigena</Radio>
    <Radio value="pardo">Parda</Radio>
    <Radio value="preto">Preta</Radio>
  </Radio.Group>
);

export const getFamilyHolderKinship = () => (
  <Select>
    <Select.Option value="conjuge">Conjuge/Companheiro</Select.Option>
    <Select.Option value="filho">Filho(a)</Select.Option>
    <Select.Option value="enteado">Enteado(a)</Select.Option>
    <Select.Option value="neto">Neto/Bisneto/Companheiro</Select.Option>
    <Select.Option value="pai">Pai/Mãe</Select.Option>
    <Select.Option value="sogro">Sogro(a)</Select.Option>
    <Select.Option value="irmao">Irmão/Irmã</Select.Option>
    <Select.Option value="genro">Genro/Nora</Select.Option>
    <Select.Option value="outro">Outro</Select.Option>
    <Select.Option value="none">Não Parente</Select.Option>
  </Select>
);

export const getJobCategoryField = () => (
  <Select>
    <Select.Option value="empregador">Empregador</Select.Option>
    <Select.Option value="assalariado_carteira">Assalariado (carteira assinada)</Select.Option>
    <Select.Option value="assalariado_informal">Assalariado (informal)</Select.Option>
    <Select.Option value="autonomo_com_previdencia">Autônomo com previdência social</Select.Option>
    <Select.Option value="autonomo_sem_previdencia">Autônomo sem previdência social</Select.Option>
    <Select.Option value="aposentado">Aposentado/Pensionista</Select.Option>
    <Select.Option value="desempregado">Desempregado</Select.Option>
    <Select.Option value="n_trabalha">Não trabalha</Select.Option>
    <Select.Option value="serv_publico">Servidor Público</Select.Option>
    <Select.Option value="militar">Militar</Select.Option>
    <Select.Option value="none">Outro</Select.Option>
  </Select>
);

export const getLastCourseField = () => (
  <Select>
    <Select.Option value="analfabeto">Analfabeto</Select.Option>
    <Select.Option value="creche">Creche</Select.Option>
    <Select.Option value="pre_escola">Pré-escola</Select.Option>
    <Select.Option value="alfabetizacao">Classe de Alfabetização</Select.Option>
    <Select.Option value="ef_1_4_serie">Ensino Fundamental (1 - 4 séries)</Select.Option>
    <Select.Option value="ef_5_8_serie">Ensino Fundamental (5 - 8 séries)</Select.Option>
    <Select.Option value="ef_completo">Ensino Fundamental (Completo)</Select.Option>
    <Select.Option value="ef_especial">Ensino Fundamental (Especial)</Select.Option>
    <Select.Option value="ef_eja_1_4_serie">Ensino Fundamental (EJA 1 - 4 séries)</Select.Option>
    <Select.Option value="ef_eja_5_8_serie">Ensino Fundamental (EJA 5 - 8 séries)</Select.Option>
    <Select.Option value="em">Ensino Médio / Científico / Técnico</Select.Option>
    <Select.Option value="em_especial">Ensino Médio (Especial)</Select.Option>
    <Select.Option value="em_eja">Ensino Médio (EJA)</Select.Option>
    <Select.Option value="superior">Superior</Select.Option>
    <Select.Option value="none">Não Informado</Select.Option>
  </Select>
);

export const getSexualOrientationField = () => (
  <Select>
    <Select.Option value="hetero">Heterossexual</Select.Option>
    <Select.Option value="gay">Gay</Select.Option>
    <Select.Option value="lesbian">Lésbica</Select.Option>
    <Select.Option value="bissex">Bissexual</Select.Option>
    <Select.Option value="other">Outra</Select.Option>
    <Select.Option value="none">Não Informado</Select.Option>
  </Select>
);

export const genderIdentityField = () => (
  <Select>
    <Select.Option value="trans_man">Homem Trans</Select.Option>
    <Select.Option value="trans_woman">Mulher Trans</Select.Option>
    <Select.Option value="travesti">Travesti</Select.Option>
    <Select.Option value="other">Outro</Select.Option>
    <Select.Option value="none">Não Informado</Select.Option>
  </Select>
);

export const getSpecialNeedsInput = () => (
  <Select>
    <Select.Option value="auditiva">Auditiva</Select.Option>
    <Select.Option value="visual">Visual</Select.Option>
    <Select.Option value="física">Fisica</Select.Option>
    <Select.Option value="intelectual">Intelectual/Cognitiva</Select.Option>
    <Select.Option value="other">Outro</Select.Option>
    <Select.Option value="none">Não Informado</Select.Option>
  </Select>
);
