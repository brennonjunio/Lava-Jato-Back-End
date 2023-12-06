import { keys } from "lodash";

export class MontarSql{
    static mount(sql:string,dataFilters:object,sqlFilter:object){
        keys(sqlFilter).forEach(key => {
            if (dataFilters[key]) {
                sql += sqlFilter[key];
            }
        });
        return sql;
    }

}