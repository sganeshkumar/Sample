class ApplicationController < ActionController::Base
  protect_from_forgery
  def application
    render :template => '/layouts/application'
  end
  
  def ajaxcall
  #render :js => "alert('Hello Rails');"
 # render :text => 'haiii'
 #render :action => "sample"
   #render :file => '/layouts/ajaxcall'
    render :template => '/layouts/ajaxcall'
  #  render :status => 500
  #  render :status => :forbidden
  end
  
  
  
  def  sample
   # render :template => 'posts/index'
   #render :text => params[:id]
   name = params[:id]
   
   a = Test.create(:name => name).save
   
   #render :text => a
  end
  
  def show
    
    render :template => 'layouts/show'
  end
  
  def lang
    render :template => '/layouts/lang'
  end
  
  
end
