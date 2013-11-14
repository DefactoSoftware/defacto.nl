{if $count > 0}
	<ul id="menul">
{foreach from=$nodelist item=node}
{if $node->depth > $node->prevdepth}

{repeat string="\t" times=$node->depth}	<ul>
{repeat string="\t" times=$node->depth}		<li>{elseif $node->depth < $node->prevdepth}
{repeat string="\t" times=$node->depth}	</ul>
{repeat string="\t" times=$node->depth}	</li>
{repeat string="\t" times=$node->depth}	<li>{else}
{repeat string="\t" times=$node->depth}	<li>{/if}<a href="{$node->url}"{if $node->accesskey != ''} accesskey="{$node->accesskey}" {/if}{if $node->tabindex != ''} tabindex="{$node->tabindex}" {/if}{if $node->titleattribute != ''}title="{$node->titleattribute}"{/if}{if $node->target ne ""} target="{$node->target}"{/if}>{if $node->depth == 1}<span>{$node->menutext}</span>{else}{$node->menutext}{/if}</a>{if $node->haschildren != true ||  $node->depth == '2'}</li>
	{/if}
{/foreach}
		{repeat string="</ul>
		</li>" times=$node->depth-1}
	</ul>
{/if}