package org.example;

import java.util.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static int calculatePower(int x,int n){

        int[] arr = new int[n];
        ArrayList<ArrayList<Integer>> list = new ArrayList<>();

        for(int i=0;i<list.size();i++){
            for(int j=0;j<list.get(i).size();j++){
                list.get(i).get(j);
            }
        }
        if(n==0) {
            return 1;
        }
        if(x == 0) {
            return 1;
        }

        if(n%2==0) {
            return calculatePower(x, n / 2) * calculatePower(x, n / 2);

        }else {
            return calculatePower(x, n / 2) * calculatePower(x, n / 2) * x;
        }
    }
    public static void main(String[] args) {
        System.out.println(calculatePower(2,5));
    }
}