puts "hello batch 689!"


variable = "what ever you want"

# GLOBAL = "Yurhi"

# GLOBAL = "Benaio"

# puts GLOBAL


first = "Carlos"
last = "Machado"

puts "#{first} #{last}"


# CRUD
fruits = ['banana']

#C
fruits.append('orange') # << 'orange'

#R
fruits[0]

#U
fruits[0] = 'watermelon'

#D
fruits.delete_at(0)

# each

beatles = ['Ringo', 'John', 'Paul', 'George']

beatles.each do |beatle|
  puts beatle
end

age = 14

if age >= 18
  puts "you can voce"
else
  puts "you cannot vote"
end


variable = 16

if variable
  puts "im ruby, a thuthy language"
else
  puts "im not ruby"
end



def square(x)
  x * x
end

puts square(x)
