# pega a imagem do postgres
FROM postgres 

# da permissao de acesso para o usuario postgres com id 1000 nessa imagem que for criada
RUN usermod -u 1000 postgres