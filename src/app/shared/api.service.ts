import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Expense} from '../model/expense';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = `http://localhost:8080` + `//api`;
  // Expense
  private GET_ALL_EXPENSES_URL = `${this.BASE_URL}//expenses`;
  private GET_EXPENSE_BY_ID = `${this.BASE_URL}//expense//`;
  private POST_EXPENSE_URL = `${this.BASE_URL}//expense`;
  private PUT_EXPENSE_URL = `${this.BASE_URL}//expense`;
  private DELETE_EXPENSE_URL = `${this.BASE_URL}//expense//`;
  // Category
  private GET_ALL_CATEGORIES_URL = `${this.BASE_URL}//categories`;
  private GET_CATEGORY_BY_ID = `${this.BASE_URL}//category//`;
  private POST_CATEGORY_URL = `${this.BASE_URL}//category`;
  private PUT_CATEGORY_URL = `${this.BASE_URL}//category`;
  private DELETE_CATEGORY_URL = `${this.BASE_URL}/category//`;

  constructor(private http: HttpClient) {
  }

  getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.GET_ALL_EXPENSES_URL);
  }

  getExpenseById(id: string): Observable<Expense> {
    return this.http.get<Expense>(this.GET_EXPENSE_BY_ID + id);
  }

  updateExpense(expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(this.PUT_EXPENSE_URL, expense);
  }

  deleteExpense(id: string): Observable<any> {
    return this.http.delete(this.DELETE_EXPENSE_URL + id);
  }

  saveExpense(expense: { description: string; location: string; categoryId: string; expenseDate: string }): Observable<Expense> {
    return this.http.post<Expense>(this.POST_EXPENSE_URL, expense);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.GET_ALL_CATEGORIES_URL);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(this.GET_CATEGORY_BY_ID + id);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.POST_CATEGORY_URL, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.PUT_CATEGORY_URL, category);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(this.DELETE_CATEGORY_URL + id);
  }


}
