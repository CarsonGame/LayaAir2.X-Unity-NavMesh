export default class Geometry extends Laya.Script{
	constructor(){
		super();
		this.faces=[];
		this.vertices=[];
	}

	/*
	*Checks for duplicate vertices with hashmap.
	*Duplicated vertices are removed
	*and faces' vertices are updated.
	*/
	mergeVertices(){
		var verticesMap={};
		var unique=new Array,changes=[];
		var v,key;
		var precisionPoints=4;
		var precision=Math.pow(10,precisionPoints);
		var i,il,face;
		var indices,j,jl;
		for (i=0,il=this.vertices.length;i < il;i++){
			v=this.vertices[ i];
			key=Math.round(v.x *precision)+'_'+Math.round(v.y *precision)+'_'+Math.round(v.z *precision);
			if (verticesMap[ key]==null){
				verticesMap[ key]=i;
				unique.push(v);
				changes[ i]=unique.length-1;
				}else {
				changes[ i]=changes[ verticesMap[ key]];
			}
		};
		var faceIndicesToRemove=[];
		for (i=0,il=this.faces.length;i < il;i++){
			face=this.faces[ i];
			face.a=changes[ face.a];
			face.b=changes[ face.b];
			face.c=changes[ face.c];
			indices=[ face.a,face.b,face.c];
			var dupIndex=-1;
			for (var n=0;n < 3;n++){
				if (indices[ n]==indices[ (n+1)% 3]){
					dupIndex=n;
					faceIndicesToRemove.push(i);
					break ;
				}
			}
		}
		for (i=faceIndicesToRemove.length-1;i >=0;i--){
			var idx=faceIndicesToRemove[ i];
			this.faces.splice(idx,1);
		};
		var diff=this.vertices.length-unique.length;
		this.vertices=unique;
		return diff;
	}
}