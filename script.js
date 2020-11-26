function getPesquisarDolar() {

				//converter o formato da data(string) de ii/mm/YYYY para YYYYmmii
				let dataInicial = document.getElementById('data_inicio').value 
				dataInicial = dataInicial.replace("/", "")
				let diaInicial = dataInicial.substr(0,2)
				let mesInicial = dataInicial.substr(2,2)
				let anoInicial = dataInicial.substr(5,4)
				let dataInicio = anoInicial+mesInicial+diaInicial

				//converter o formato da data(string) de ii/mm/YYYY para YYYYmmii
				let dataFinal = document.getElementById('data_fim').value
				dataFinal = dataFinal.replace("/", "")
				let diaFim = dataFinal.substr(0,2)
				let mesFim = dataFinal.substr(2,2)
				let anoFim = dataFinal.substr(5,4)
				let dataFim = anoFim+mesFim+diaFim

				let url = 'https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date='+dataInicio+'&end_date='+dataFim

				let xmlHttp = new XMLHttpRequest()
				xmlHttp.open('GET', url)

				xmlHttp.onreadystatechange = () => {
					if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
						let dadosJSONText = xmlHttp.responseText
						let dadosJSONObj = JSON.parse(dadosJSONText)
						let valores = dadosJSONObj[0]

						document.getElementById('alta').value = "R$ " + valores.high.substr(0,4)				
						document.getElementById('baixa').value = "R$ " +  valores.low.substr(0,4)
						document.getElementById('compra').value = "R$ " +  valores.bid.substr(0,4)
						document.getElementById('venda').value = "R$ " +  valores.ask.substr(0,4)
						document.getElementById('variacao').value = valores.varBid + " %"		
						document.getElementById('pctVariacao').value = valores.pctChange + " %"	

						console.log(url)				
						
					}
				}

				xmlHttp.send()
			}