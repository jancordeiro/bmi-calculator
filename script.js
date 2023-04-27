const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep,nextStep)
{
	let dNone, dBlock;
	if(currentStep == 1)
	{
		dNone = firstDiv;
	}
	else if(currentStep == 2)
	{
		dNone = secondDiv;
	}
	else 
	{
		dNone = finalDiv;
	}
	
	dNone.style.display = 'none';
	
	if(nextStep == 1)
	{
		dBlock = firstDiv;
	}
	else if(nextStep == 2)
	{
		dBlock = secondDiv;
	}
	else 
	{
		dBlock = finalDiv;
	}
	dBlock.style.display = 'block';
}

function validate()
{
	const weight = document.getElementById('weight');
	const height = document.getElementById('height');
	weight.style.border = 'none';
	height.style.border = 'none';
	if(!weight.value || !height.value)
	{
		if(!weight.value && !height.value)
		{
			weight.style.border = '1px solid red';
			height.style.border = '1px solid red';
			alert("EMPTY FIELDS!")
			// console.log('Empty fileds');
		}
		else if(!weight.value)
		{
			weight.style.border = '1px solid red';
			alert("WEIGHT EMPTY!")
			// console.log('Empty Weight');
		}
		else
		{
			height.style.border = '1px solid red';
			alert("HEIGHT EMPTY!")
			// console.log('Empty Height');
		}
		
	}
	else
	{
		let bmi = weight.value / (height.value * height.value);
		const result = document.getElementById('result');
		if(bmi < 18.5)
		{
			console.log('Thinness | Obesity Level: 0');
			result.style.color = 'yellow';
			result.innerHTML = 'Thinness | Obesity Level: 0';
		}
		else if(bmi >= 18.5 && bmi < 25)
		{
			console.log('Normal | Obesity Level: 0');
			result.style.color = 'green';
			result.innerHTML = 'Normal | Obesity Level: 0';
		}
		else if(bmi >= 25 && bmi < 30)
		{
			console.log('Overweight | Obesity Level: 1');
			result.style.color = 'orange';
			result.innerHTML = 'Overweight | Obesity Level: 1';
		}
		else if(bmi >= 30 && bmi < 40)
		{
			console.log('Obesity | Obesity Level: 2');
			result.style.color = 'red';
			result.innerHTML = 'Obesity | Obesity Level: 2';
		}
		else 
		{
			console.log('High Obesity | Obesity Level: 3');
			result.style.color = 'black';
			result.innerHTML = 'High Obesity | Obesity Level: 3';
		}
		go(2,3);
		// console.log(bmi);
	}
}