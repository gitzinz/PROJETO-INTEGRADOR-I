create database db_estoque;

use db_estoque;


CREATE TABLE PRODUTO (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor_un DECIMAL(10, 2) NOT NULL,
    quantidade_estoque INT NOT NULL DEFAULT 0,
    valor_total DECIMAL(10, 2) NOT NULL DEFAULT 0.00
);


CREATE TABLE FUNCIONARIO (
    cpf VARCHAR(14) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);


CREATE TABLE MOVIMENTA (
    id_mov INT PRIMARY KEY AUTO_INCREMENT,
    id_prod INT,
    cpf_func VARCHAR(14),
    tipo_mov ENUM('entrada', 'saida') NOT NULL,
    quantidade INT NOT NULL,
    data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_prod) REFERENCES PRODUTO(id),
    FOREIGN KEY (cpf_func) REFERENCES FUNCIONARIO(cpf)
);

DELIMITER //

CREATE TRIGGER atualizar_estoque
AFTER INSERT ON MOVIMENTA
FOR EACH ROW
BEGIN

    IF NEW.tipo_mov = 'entrada' THEN
        UPDATE PRODUTO
        SET quantidade_estoque = quantidade_estoque + NEW.quantidade
    WHERE id = NEW.id_prod;
    ELSEIF NEW.tipo_mov = 'saida' THEN
        UPDATE PRODUTO
        SET quantidade_estoque = quantidade_estoque - NEW.quantidade
    WHERE id = NEW.id_prod;
    END IF;


    UPDATE PRODUTO
    SET valor_total = quantidade_estoque * valor_un
    WHERE id = NEW.id_prod;
END;

//

DELIMITER ;