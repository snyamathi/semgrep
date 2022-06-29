val dotted_lvars_of_lval : IL.lval -> (IL.name * IL.name list) option
val lvar_of_instr_opt : IL.instr -> IL.name option
val rlvals_of_node : IL.node_kind -> IL.lval list
