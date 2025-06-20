function groupPlateRanges(rawInput) {
  // Garante que temos um array de linhas
  const lines = Array.isArray(rawInput)
    ? rawInput
    : rawInput
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean);

  const map = new Map();

  for (const line of lines) {
    const [rangePart, state] = line.split(/\s*–\s*/);
    if (!rangePart || !state) continue;

    const [start, end] = rangePart.split(/\s+a\s+/i).map((s) => s.trim());

    if (!map.has(state)) {
      map.set(state, []);
    }
    map.get(state).push({ start, end });
  }

  return Array.from(map, ([state, ranges]) => ({ state, ranges }));
}

const input = `
AAA a BEZ – Paraná
BFA a GKI – São Paulo
GKJ a HOK – Minas Gerais
HOL a HQE – Maranhão
HQF a HTW – Mato Grosso do Sul
HTX a HZA – Ceará
HZB a IAP – Sergipe
IAQ a JDO – Rio Grande do Sul
JDP a JKR – Distrito Federal
JKS a JSZ – Bahia
JTA a JWE – Pará
JWF a JXY – Amazonas
JXZ a KAU – Mato Grosso
KAV a KFC – Goiás
KFD a KME – Pernambuco
KMF a LVE – Rio de Janeiro
LVF a LWQ – Piauí
LWR a MMM – Santa Catarina
MMN a MOW – Paraíba
MOX a MTZ – Espírito Santo
MUA a MVK – Alagoas
MVL a MXG – Tocantins
MXH a MZM – Rio Grande do Norte
MZN a NAG – Acre
NAH a NBA – Roraima
NBB a NEH – Rondônia
NEI a NFB – Amapá
NFC a NGZ – Goiás
NHA a NHT – Maranhão
NHU a NIX – Piauí
NIY a NJW – Mato Grosso
NJX a NLU – Goiás
NLV a NMO – Alagoas
NMP a NNI – Maranhão
NNJ a NOH – Rio Grande do Norte
NOI a NPB – Amazonas
NPC a NPQ – Mato Grosso
NPR a NQK – Paraíba
NQL a NRE – Ceará
NRF a NSD – Mato Grosso do Sul
NSE a NTC – Pará
NTD a NTW – Bahia
NTX a NUG – Mato Grosso
NUH a NUL – Roraima
NUM a NVF – Ceará
NVG a NVN – Sergipe
NVO a NWR – Goiás
NWS a NXQ – Maranhão
NXR a NXT – Acre
NXU a NXW – Pernambuco
NXX a NYG – Minas Gerais
NYH a NZZ – Bahia
OAA a OAO – Amazonas
OAP a OBS – Mato Grosso
OBT a OCA – Pará
OCB a OCU – Ceará
OCV a ODT – Espírito Santo
ODU a OEI – Piauí
OEJ a OES – Sergipe
OET a OFH – Paraíba
OFI a OFW – Pará
OFX a OGG – Paraíba
OGH a OHA – Goiás
OHB a OHK – Alagoas
OHL a OHW – Rondônia
OHX a OIQ – Ceará
OIR a OJQ – Maranhão
OJR a OKC – Rio Grande do Norte
OKD a OKH – Santa Catarina
OKI a OLG – Bahia
OLH a OLN – Tocantins
OLO a OMH – Minas Gerais
OMI a OOF – Goiás
OOG a OOU – Mato Grosso do Sul
OOV a ORC – Minas Gerais
ORD a ORM – Alagoas
ORN a OSV – Ceará
OSW a OTZ – Pará
OUA a OUE – Piauí
OUF a OVD – Bahia
OVE a OVF – Espírito Santo
OVG a OVG – Acre
OVH a OVL – Espírito Santo
OVM a OVV – Distrito Federal
OVW a OVY – Piauí
OVZ a OWG – Rio Grande do Norte
OWH a OXK – Minas Gerais
OXL a OXL – Rondônia
OXM a OXM – Amazonas
OXN a OXN – Alagoas
OXO a OXO – Paraíba
OXP a OXP – Acre
OXQ a OXZ – Maranhão
OYA a OYC – Tocantins
OYD a OYK – Espírito Santo
OYL a OYZ – Pernambuco
OZA a OZA – Ceará
OZB a OZB – Sergipe
OZC a OZV – Bahia
OZW a PBZ – Distrito Federal
PCA a PED – Pernambuco
PEE a PFQ – Pernambuco
PFR a PGK – Pernambuco
PGL a PGU – Pernambuco
PGV a PGZ – Pernambuco
PHA a PHZ – Amazonas
PIA a PIZ – Piauí
PJA a PLZ – Bahia
PMA a POZ – Ceará
PPA a PPZ – Espírito Santo
PQA a PRZ – Goiás
PSA a PTZ – Maranhão
PUA a PZZ – Minas Gerais
QAA a QAZ – Mato Grosso do Sul
QBA a QCZ – Mato Grosso
QDA a QEZ – Pará
QFA a QFZ – Paraíba
QGA a QGZ – Rio Grande do Norte
QHA a QJZ – Santa Catarina
QKA a QKM – Tocantins
QKN a QKZ – Sergipe
QLA a QLM – Alagoas
QLN a QLT – Amapá
QLU a QLZ – Acre
QMA a QMP – Sergipe
QMQ a QQZ – Minas Gerais
QRA a QRA – Rondônia
QRB a QRM – Espírito Santo
QRN a QRZ – Piauí
QSA a QSM – Paraíba
QSN a QSZ – São Paulo
QTA a QTJ – Rondônia
QTK a QTM – Santa Catarina
QTN a QTS – Goiás
QTT a QTT – Alagoas
QTU a QTZ – Bahia
QUA a QUZ – Minas Gerais
QVA a QVZ – Pará
QWA a QWF – Tocantins
QWG a QWL – Alagoas
QWM a QWQ – Acre
QWR a QXZ – Minas Gerais
QYA a QYZ – Pernambuco
QZA a QZZ – Amazonas
RAA a RAJ – Santa Catarina
RAK a RAZ – Mato Grosso
RBA a RBJ – Espírito Santo
RBK a RCN – Goiás
RCO a RDR – Bahia
RDS a REB – Santa Catarina
REC a REV – Distrito Federal
REW a REZ – Mato Grosso do Sul
RFA a RGD – Minas Gerais
RGE a RGM – Rio Grande do Norte
RGN a RGN – Rio Grande do Norte
RGO a RGU – Alagoas
RHA a RHZ – Paraná
RIA a RIN – Ceará
RIO a RIO – Rio de Janeiro
RIP a RKV – Rio de Janeiro
RKW a RLP – Santa Catarina
RLQ a RMC – Paraíba
RMD a RNZ – Minas Gerais
ROA a ROZ – Maranhão
RPA a RQL – Bahia
RQM a RQV – Espírito Santo
RQW a RRH – Sergipe
RRI a RRZ – Mato Grosso
RSA a RSF – Tocantins
RSG a RST – Piauí
RSU a RSZ – Rondônia
RTA a RVZ – Minas Gerais
RWA a RWJ – Mato Grosso do Sul
RWK a RXD – Pará
RXK a RYI – Santa Catarina
RZA a RZD – Roraima
RZE a RZZ – Pernambuco
SAA a SAJ – Alagoas
SAK a SAM – Amapá
SAN a SBV – Ceará
SBW a SDS – Goiás
`;

const states = groupPlateRanges(input);
console.log(JSON.stringify(states, null, 2));
