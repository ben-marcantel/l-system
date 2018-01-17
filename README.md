# l-system
first attempt at expressing l-system generation in javascript:

for my base schema i used the classic algae model.

 variables : A B
 constants : none
 axiom  : A
 rules  : (A → AB), (B → A)

the fern code iteration is as follows;

 variables : X F
 constants : + − [ ]
 start  : X
 rules  : (X → F[−X][X]F[−X]+FX), (F → FF)


