#include <stdlib.h>
#include <stdio.h>

typedef int ListEntry;  
typedef struct ListNode 
{
    ListEntry entry;
    struct ListNode *next;
} ListNode;

typedef struct List  
{
    ListNode *start;
    ListNode *end;
    int size;
} List;

List *createList() 
{  
    List *list = (List *)malloc(sizeof(List));
    list->start = list->end = NULL;
    list->size = 0;
    return list;
}

ListNode *createListNode(ListEntry item) 
{
    ListNode *node = (ListNode *)malloc(sizeof(ListNode));
    node->entry = item;
    return node;
}

void insertAtStart(ListEntry item, List *list)
{
    ListNode *node = createListNode(item);
    if(list->start == NULL) list->start = list->end = node;
    else {
        node->next = list->start;
        list->start = node;
    }
    list->size++;
}

void insertAt(ListEntry item, List *list, int position)
{
    if(0<=position && position<list->size)
        if(position==0) insertAtStart(item, list);
        else {
            ListNode *node = createListNode(item);
            ListNode *previousNode = searchListNode(list, position-1);
            ListNode *actualNode = previousNode->next;
            previousNode->next = node;
            node->next = actualNode;
            list->size++;
        }
    else perror("Error: invalid position");
}

ListNode *searchListNode(List *list, int position)
{
    if(position==0) return list->start;
    if(position==list->size-1) return list->end;
    ListNode *aux = list->start;
    while(position!=0) {
        aux = aux->next;
        position--;
    }
    return aux;
} 

void insertAtEnd(ListEntry item, List *list) 
{
    ListNode *node = createListNode(item);
    if(list->start == NULL) list->start = list->end = node;
    else {
        list->end->next = node;
        list->end = node;
        node->next = NULL;
    }
    list->size++;
}

void deleteAtStart(List *list)
{
    if ((list->start)==NULL) perror("Error: current queue is empty");
    else {
        ListNode *temp = list->start;
        list->start = list->start->next;
        free(temp);
        list->size--;
    }
}

void deleteAt(List *list, int position)
{
    if(0<=position && position<list->size)
        if(position==0) deleteAtStart(list);
        else if(position==list->size-1) deleteAtEnd(list);
        else {
            ListNode *previousNode = searchListNode(list, position-1);
            ListNode *temp = previousNode->next;
            previousNode->next = previousNode->next->next;
            free(temp);
            list->size--;
        }
    else perror("Error: invalid position");
}

void deleteAtEnd(List *list)
{
    if ((list->end)==NULL) perror("Error: current queue is empty");
    else {
        ListNode *temp = list->end;
        list->end = searchListNode(list,(list->size) - 2);
        list->end->next = NULL;
        free(temp);
        list->size--;
    }
}
