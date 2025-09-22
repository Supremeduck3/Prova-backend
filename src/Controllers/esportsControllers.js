import dados from "../models/dados.js";
const { esports } = dados;

const getAllesports = (req, res) => {
  res.status(200).json({
    total: esports.length,
    esports: esports,
  });
};

const getEsportsbyid = (req, res) => {
  let id = req.params.id;
  id = parseInt(id);

  const esport = esports.find((e) => e.id === id);

  if (!esport) {
    res.status(404).json({
      sucess: false,
      messsage: `Não existe um time com esse id ${id}`,
    });
  }
  res.status(200).json({
    total: esports.length,
    esports: esport,
  });
};

const createteams = (req, res) => {
  const {
    equipe,
    jogo,
    jogadores,
    campeonato,
    posição,
    premiação,
    tecnico,
    ativa,
  } = req.body;
  if (!equipe || !jogo || !jogadores || !tecnico || !ativa || posição <= 0) {
    return res.status(400).json({
      sucess: false,
      messsage:
        " Equipe, jogo, jogadores, tecnico, estar ativa e posição maior que 0 são obrigatorios",
    });
  }
  if ((posição <= 3 && premiação == 0) || premiação == null) {
    return res.status(400).json({
      sucess: false,
      messsage:
        "Se a equipe estiver no top 3 a premição deverá ser maior que 0",
    });
  }
  const novoTime = {
    id: esports.length,
    equipe: equipe,
    campeonato: campeonato,
    posição: parseInt(posição),
    premiação: parseInt(premiação),
    tecnico: tecnico,
    ativa: ativa,
  };
  esports.push(novoTime);
  res.status(201).json({
    sucess: true,
    messsage: "Seu Time foi adicionado com sucesso!",
    time: novoTime,
  });
};
const deleteTeams = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      sucess: false,
      message: "O id deve ser valido",
    });
  }
  const timeRemovido = esports.find((esport) => esport.id === id);
  if (!timeRemovido) {
    return res.status(404).json({
      sucess: false,
      message: `Time com o id ${id} não existe`,
    });
  }
  const timeFiltrado = esports.filter((esports) => esports.id !== id);
  esports.splice(0, esports.length, ...timeFiltrado);
  return res.status(200).json({
    sucess: true,
    message: `Seu time foi removido com sucesso`,
  });
};

const filtrarPorjogo = (req, res) => {
  const jogo = req.query.jogo;
  if (!jogo)
    return res.status(400).json({
      sucess: false,
      message: "Deve se inserir um jogo valido",
    });
  const resultado = esports.filter((f) => f.jogo.includes(jogo));
  return res.status(200).json({
    sucess: true,
    resultado:resultado,
  });
};
const updateTimes = (req, res) => {
    const id = parseInt(req.params.id)
    const {
        equipe,
        jogo,
        jogadores,
        campeonato,
        posição,
        premiação,
        tecnico,
        ativa,
      } =req.body
    const idParaEditar = id;
    //garante que o id é um número//
    if(isNaN(idParaEditar)){
        return res.status(400).json({
            sucess:false,
            message:"O id deve ser um número"
        })
    }
    const esportsExiste = esports.find( esports => esports.id === idParaEditar);
    if(!esportsExiste){
        return res.status(404).json({
            success: false,
            message: `Nenhum esports com o id: ${id} não foi encontrada`
        })
    }
const esportsAtualizados = esports.map(esports=> esports.id === idParaEditar?{
    ...esports,
    ...(equipe && {equipe}),
    ...(jogo && {jogo}),
    ...(campeonato && {campeonato}),
    ...(posição && {posição}),
    ...(premiação && {premiação}),
    ...(jogadores && {jogadores}),
    ...(ativa && {ativa}),
    ...(tecnico && {tecnico}),
}
:esports
);
esports.splice(0,esports.length, ...esportsAtualizados);
const esportsEditado = esports.find(esports => esports.id === idParaEditar)
res.status(200).json({
    sucess: true,
    message: "Os dados foram atualizados com sucesso",
    esports: esportsEditado
})
}
export { getAllesports, getEsportsbyid, createteams, deleteTeams,filtrarPorjogo,updateTimes };
