#include <stdlib.h>
#include <limits.h>
#include <stdio.h>

typedef int ListEntry;  
typedef struct ListNode
{
    ListEntry entry;
    struct ListNode *next;
} ListNode;

typedef struct List 
{
    ListNode *beginning;
    ListNode *end;
    int size;
} List;

List *createList()
{  
    List *list = (List *)malloc(sizeof(List));
    list->beginning = list->end = NULL;
    size=0;
    return list;
}

ListNode *createListNode(ListEntry item)
{
    ListNode *node = (ListNode *)malloc(sizeof(ListNode));
    node->entry = item;
    return node;
}

//Insert
//At the beginning
void insertAtBeginning(ListEntry item, List *list)
{
    ListNode *node = createListNode(item);
    if(list->beginning == NULL){
        list->beginning = list->end = node;
    }
    else{
        node->next = list->beginning;
        list->beginning = node;
    }

    list->size++;

}

//At any position
void insertAt(ListEntry item, List *list, int position)
{
    if(0<=position && position<list->size)
        if(position==0) insertAtTheBeginning(item, list);
        else{
            ListNode *node = createListNode(item);
            ListNode *previousNode = searchListNode(list->beginning, position-1);
            ListNode *actualNode =previousNode->next;
            previousNode->next = node;
            node->next = actualNode;
        }
    else perror("Error: invalid position");
}

ListNode *searchListNode(List *list, int position){
    if(position==0) return list->beginning;
    if(position==length-1) return list->end;
    ListNode *aux = list->beginning;
    while(position!=0){
        aux = aux->next;
        position--;
    }
    return aux;
} 

//At the end
void insertAtEnd(ListEntry item, List *list)
{
    ListNode *node = createListNode(item);
    if(list->beginning == NULL) list->beginning = list->end = node;
    else{
        list->end->next = node;
        list->end = node;
        node->next = null;
    }
}

//Delete 
//At the beginning
void deleteAtTheBeginning(List *list){

}

//At any position
void deleteAt(List *list, int position){

}

//At the end
void deleteAtTheEnd(ListEntry item, List *list){
    
}

