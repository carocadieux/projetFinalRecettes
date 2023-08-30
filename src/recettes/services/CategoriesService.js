import { config } from '../../config';

class CategoriesService {
    baseUrl = config.baseUrl;
    endpoint = 'categories.php'

    async getAllCategoriesRecipe() {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}`);
		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		return data.categories;
	}

}


export default CategoriesService;